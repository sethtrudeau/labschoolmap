// Local dev server for the static site.
// Serves the .dc.html/CSS/JS files as-is, and adds one API route
// (/api/cards) that proxies the Notion "Moves Library" database.
//
// The Notion token never reaches the browser: this process calls
// Notion server-side and hands the page back plain JSON.
//
// Run: node dev-server.js   (reads NOTION_TOKEN / NOTION_DATABASE_ID from .env)

const http = require('http');
const https = require('https');
const fs = require('fs');
const path = require('path');

// --- tiny .env loader (no dependency) ---
const envPath = path.join(__dirname, '.env');
if (fs.existsSync(envPath)) {
  for (const line of fs.readFileSync(envPath, 'utf8').split('\n')) {
    const m = line.match(/^\s*([\w.-]+)\s*=\s*(.*)\s*$/);
    if (m && !process.env[m[1]]) process.env[m[1]] = m[2];
  }
}

const NOTION_TOKEN = process.env.NOTION_TOKEN;
const NOTION_DATABASE_ID = process.env.NOTION_DATABASE_ID;
const PORT = process.env.PORT || 8000;
const ROOT = __dirname;
const TYPES = { '.html': 'text/html', '.js': 'application/javascript', '.css': 'text/css', '.json': 'application/json', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.png': 'image/png', '.md': 'text/markdown' };

// --- Notion proxy, with a short cache so repeated reloads don't hammer the API ---
let cache = null; // { at: timestamp, cards: [...] }
const CACHE_MS = 30 * 1000;

function notionQuery(cursor) {
  return new Promise((resolve, reject) => {
    const body = JSON.stringify(cursor ? { page_size: 100, start_cursor: cursor } : { page_size: 100 });
    const req = https.request(`https://api.notion.com/v1/databases/${NOTION_DATABASE_ID}/query`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${NOTION_TOKEN}`,
        'Notion-Version': '2022-06-28',
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(body)
      }
    }, res => {
      let data = '';
      res.on('data', c => data += c);
      res.on('end', () => {
        try { resolve(JSON.parse(data)); } catch (e) { reject(e); }
      });
    });
    req.on('error', reject);
    req.write(body);
    req.end();
  });
}

async function fetchCards() {
  if (cache && Date.now() - cache.at < CACHE_MS) return cache.cards;
  let rows = [];
  let cursor;
  while (true) {
    const d = await notionQuery(cursor);
    if (d.object === 'error') throw new Error(d.message || 'Notion API error');
    rows = rows.concat(d.results);
    if (!d.has_more) break;
    cursor = d.next_cursor;
  }
  const cards = rows.map(r => {
    const p = r.properties;
    return {
      id: r.id,
      name: (p.Move.title || []).map(t => t.plain_text).join(''),
      body: (p.Description.rich_text || []).map(t => t.plain_text).join(''),
      challenge: p.Challenge.select ? p.Challenge.select.name : null,
      link: p.Link.url || null
    };
  });
  cache = { at: Date.now(), cards };
  return cards;
}

http.createServer((req, res) => {
  if (req.url.split('?')[0] === '/api/cards') {
    if (!NOTION_TOKEN || !NOTION_DATABASE_ID) {
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'NOTION_TOKEN / NOTION_DATABASE_ID not configured on the server' }));
      return;
    }
    fetchCards().then(cards => {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(cards));
    }).catch(err => {
      res.writeHead(502, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: String(err.message || err) }));
    });
    return;
  }

  let p = decodeURIComponent(req.url.split('?')[0]);
  if (p === '/') p = '/Lab School Navigator.dc.html';
  const full = path.join(ROOT, p);
  fs.readFile(full, (err, data) => {
    if (err) { res.writeHead(404); res.end('not found'); return; }
    const ext = path.extname(full).toLowerCase();
    res.writeHead(200, { 'Content-Type': TYPES[ext] || 'application/octet-stream' });
    res.end(data);
  });
}).listen(PORT, () => console.log(`listening on ${PORT}`));

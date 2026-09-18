// Local dev server for the static site.
// Serves the .dc.html/CSS/JS files as-is, and adds one API route
// (/api/cards) using the same Notion-proxy logic as the Vercel
// serverless function at api/cards.js (shared via api/_notion.js).
//
// Run: node dev-server.js   (reads NOTION_TOKEN / NOTION_DATABASE_ID from .env)

const http = require('http');
const fs = require('fs');
const path = require('path');
const { fetchCards } = require('./api/_notion');

// --- tiny .env loader (no dependency). Vercel doesn't need this — it
// injects environment variables directly — this is local-dev only. ---
const envPath = path.join(__dirname, '.env');
if (fs.existsSync(envPath)) {
  for (const line of fs.readFileSync(envPath, 'utf8').split('\n')) {
    const m = line.match(/^\s*([\w.-]+)\s*=\s*(.*)\s*$/);
    if (m && !process.env[m[1]]) process.env[m[1]] = m[2];
  }
}

const PORT = process.env.PORT || 8000;
const ROOT = __dirname;
const TYPES = { '.html': 'text/html', '.js': 'application/javascript', '.css': 'text/css', '.json': 'application/json', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.png': 'image/png', '.md': 'text/markdown' };

http.createServer((req, res) => {
  if (req.url.split('?')[0] === '/api/cards') {
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

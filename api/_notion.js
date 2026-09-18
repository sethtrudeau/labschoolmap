// Shared Notion "Moves Library" fetcher, used by both the Vercel
// serverless function (api/cards.js) and the local dev server
// (dev-server.js), so there's one copy of this logic.
//
// Reads NOTION_TOKEN / NOTION_DATABASE_ID from the environment (set in
// .env locally, and in the Vercel project's Environment Variables in
// production) — the token never reaches the browser.
//
// Prefixed with `_` so Vercel excludes it from becoming its own route.

const CACHE_MS = 30 * 1000;
let cache = null; // { at: timestamp, cards: [...] }

async function notionQuery(token, databaseId, cursor) {
  const res = await fetch(`https://api.notion.com/v1/databases/${databaseId}/query`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Notion-Version': '2022-06-28',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(cursor ? { page_size: 100, start_cursor: cursor } : { page_size: 100 })
  });
  const data = await res.json();
  if (data.object === 'error') throw new Error(data.message || 'Notion API error');
  return data;
}

async function fetchCards() {
  if (cache && Date.now() - cache.at < CACHE_MS) return cache.cards;

  const token = process.env.NOTION_TOKEN;
  const databaseId = process.env.NOTION_DATABASE_ID;
  if (!token || !databaseId) throw new Error('NOTION_TOKEN / NOTION_DATABASE_ID not configured');

  let rows = [];
  let cursor;
  while (true) {
    const d = await notionQuery(token, databaseId, cursor);
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

module.exports = { fetchCards };

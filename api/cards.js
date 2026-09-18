// Vercel serverless function: GET /api/cards
// Proxies the Notion "Moves Library" database server-side so the
// browser never sees the Notion token.

const { fetchCards } = require('./_notion');

module.exports = async (req, res) => {
  try {
    const cards = await fetchCards();
    res.status(200).json(cards);
  } catch (err) {
    res.status(502).json({ error: String(err.message || err) });
  }
};

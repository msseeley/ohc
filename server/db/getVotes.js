const db = require('.');
const renameKey = require('../../utils/renameKey');

const getVotes = async (stripeToken) => {
  const { rows } = await db.query('SELECT type, choice, date_submitted FROM votes WHERE stripe_token = $1', [stripeToken]);
  return rows.map(row => renameKey(row, 'date_submitted', 'dateSubmitted'));
};

module.exports = getVotes;

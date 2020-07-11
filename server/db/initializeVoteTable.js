const db = require('.');

const voteTable = `CREATE TABLE IF NOT EXISTS votes (
  stripe_token varchar,
  type varchar,
  choice varchar,
  date_submitted timestamp with time zone
)`;

const initializeVoteTable = () => {
  return db.query(voteTable);
};

module.exports = initializeVoteTable;

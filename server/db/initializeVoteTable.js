const db = require('.');

const voteTable = `CREATE TABLE IF NOT EXISTS votes(
  device_id varchar,
  stripe_token varchar,
  hair_choice varchar,
  beard_choice varchar
);`;

const initializeVoteTable = () => {
  return db.query(voteTable);
};

module.exports = initializeVoteTable;

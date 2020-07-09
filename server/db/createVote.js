const db = require('.')

const createVote = ({ stripeToken, type, choice, dateSubmitted = new Date() }) => {
  return db.query(
    'INSERT INTO votes (stripe_token, type, choice, date_submitted) VALUES ($1, $2, $3, $4)',
    [stripeToken, type, choice, dateSubmitted]
  );
};

module.exports = createVote;

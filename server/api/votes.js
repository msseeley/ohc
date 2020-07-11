const { Router } = require('express');

const getVotes = require('../db/getVotes');

const votesRouter = Router();

votesRouter.get('/', async (request, response, next) => {
  const { stripeToken } = request.query;
  try {
    const votes = await getVotes(stripeToken);
    response.json(votes);
  }
  catch (error) {
    next(error);
  }
});

module.exports = votesRouter;

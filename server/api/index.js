const { Router } = require('express');

const votesRouter = require('./votes');

const apiRouter = Router();

apiRouter.use('/votes', votesRouter);

module.exports = apiRouter;

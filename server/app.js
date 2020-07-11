const express = require('express');
const { join } = require('path');

const apiRouter = require('./api');

const app = express();

app.use(express.static(join(__dirname, '..', 'public')));

app.use('/api', apiRouter);

app.use((error, request, response, next) => {
  console.error(error);
  next(error);
});

module.exports = app;

const cafeRouter = require('./cafeRouter');
const apiRouter = require('express').Router();

apiRouter.use('/cafes',cafeRouter);

module.exports = apiRouter;
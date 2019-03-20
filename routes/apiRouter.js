const apiRouter = require('express').Router();
const cafeRouter = require('./cafeRouter');

apiRouter.use('/cafes', cafeRouter)

module.exports = apiRouter;
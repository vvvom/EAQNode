const apiRouter = require('express').Router();
const  cafeRouter = require('./cafe');

apiRouter.use('/cafes', cafeRouter);

module.exports = apiRouter;


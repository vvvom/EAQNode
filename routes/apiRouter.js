const apiRouter = require('express').Router();
const cafeRouter = require('./cafeRouter');
const foodRouter = require('./foodRouter');

apiRouter.use('/cafes', cafeRouter);
apiRouter.use('/food', foodRouter);

module.exports = apiRouter;

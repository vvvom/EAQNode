const apiRouter = require('express').Router();
const cafeRouter = require('./cafeRouter');
const orderRouter = require('./orderRouter');
const foodRouter = require('./foodRouter');
const drinkRouter = require('./drinkRouter');
const menuRouter = require('./menuRouter');

apiRouter.use('/cafes', cafeRouter);
apiRouter.use('/orders', orderRouter);
apiRouter.use('/foods', foodRouter);
apiRouter.use('/drinks', drinkRouter);

module.exports = apiRouter;
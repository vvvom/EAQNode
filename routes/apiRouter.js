const apiRouter = require('express').Router();
const cafeRouter = require('./cafeRouter');
const drinkRouter = require('./drinkRouter');
const foodRouter = require('./foodRouter');
const menuRouter = require('./menuRouter');
const orderRouter = require('./orderRouter');
const refJournalRouter = require('./refJournalRouter');

apiRouter.use('/cafes', cafeRouter);
apiRouter.use('/food', foodRouter);
apiRouter.use('/drinks', drinkRouter);
apiRouter.use('/menu', menuRouter);
apiRouter.use('/order', orderRouter);
apiRouter.use('/journal', refJournalRouter);

module.exports = apiRouter;

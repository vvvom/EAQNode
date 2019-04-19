const apiRouter = require('express').Router();
const cafeRouter = require('./cafeRouter');
const orderRouter = require('./orderRouter');
const foodRouter = require('./foodRouter');
const drinkRouter = require('./drinkRouter');
const menuRouter = require('./menuRouter');
const paymentRouter = require('./paymentRouter');
const refJournalRouter = require('./refJournalRouter');
const typeFoodRouter = require('./typeFoodRouter');
const typeDrinkRouter = require('./typeDrinkRouter');
const userRouter = require('./userRouter');
// const arrayHashTable = require('./arrayHashTable')

apiRouter.use('/cafes', cafeRouter);
apiRouter.use('/orders', orderRouter);
apiRouter.use('/foods', foodRouter);
apiRouter.use('/drinks', drinkRouter);
apiRouter.use('/menus', menuRouter);
apiRouter.use('/payments', paymentRouter);
apiRouter.use('/journals', refJournalRouter);
apiRouter.use('/types/foods', typeFoodRouter);
apiRouter.use('/types/drinks', typeDrinkRouter);
apiRouter.use('/users', userRouter);
// apiRouter.use('/', arrayHashTable);

module.exports = apiRouter;

const apiRouter = require('express').Router();
const cafeRouter = require('./cafeRouter');
const orderRouter = require('./orderRouter');
const foodRouter = require('./foodRouter');
const drinkRouter = require('./drinkRouter');
const menuRouter = require('./menuRouter');
const paymentRouter = require('./paymentRouter');
const refJornalRouter = require('./refJournalRouter');
const typeFoodRouter = require('./typeFoodRouter');
const typeDrinkRouter = require('./typeDrinkRouter');
const useRouter = require('./userRouter');

apiRouter.use('/cafes', cafeRouter);
apiRouter.use('/orders', orderRouter);
apiRouter.use('/foods', foodRouter);
apiRouter.use('/drinks', drinkRouter);
apiRouter.use('/menus', menuRouter);
apiRouter.use('/payments', paymentRouter);
apiRouter.use('/journals', refJornalRouter);
apiRouter.use('/type/foods', typeFoodRouter);
apiRouter.use('/type/drinks', typeDrinkRouter);
apiRouter.use('/user', useRouter);

module.exports = apiRouter;
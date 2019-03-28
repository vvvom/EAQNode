const apiRouter = require('express').Router();
const  cafeRouter = require('./cafe');
const  drinkRouter = require('./drink');
const  foodRouter = require('./food');
const  menuRouter = require('./menu');
const  orderRouter = require('./order');
const  paymentsTypeRouter = require('./paymentsType');
const  refJournalRouter = require('./refJournal');
const  typeDrinkRouter = require('./typeDrink');
const  typeFoodRouter = require('./typeFood');
const  userRouter = require('./user');

apiRouter.use('/cafes', cafeRouter);
apiRouter.use('/drinks', drinkRouter);
apiRouter.use('/foods', foodRouter);
apiRouter.use('/menus', menuRouter);
apiRouter.use('/orders', orderRouter);
apiRouter.use('/paymentsTypes', paymentsTypeRouter);
apiRouter.use('/refJournals', refJournalRouter);
apiRouter.use('/typeDrinks', typeDrinkRouter);
apiRouter.use('/typeFoods', typeFoodRouter);
apiRouter.use('/users', userRouter);

module.exports = apiRouter;


const apiRouter = require('express').Router();
const  cafeRouter = require('./cafe').Router();
const  drinkRouter = require('./drink').Router();
const  foodRouter = require('./food').Router();
const  menuRouter = require('./menu').Router();
const  orderRouter = require('./order').Router();
const  paymentsTypeRouter = require('./paymentsType').Router();
const  refJournalRouter = require('./refJournal').Router();
const  typeDrinkRouter = require('./typeDrink').Router();
const  typeFoodRouter = require('./typeFood').Router();
const  userRouter = require('./user').Router();

apiRouter.use('/cafes', cafeRouter);
apiRouter.use('/drinks', drinkRouter);
apiRouter.use('/foods', foodRouter);
apiRouter.use('/menus', menuRouter);
apiRouter.use('/orders', orderRouter);
apiRouter.use('/paymentsTypes', paymentsTypeRouter);
apiRouter.use('/refJournal', refJournalRouter);
apiRouter.use('/typeDrink', typeDrinkRouter);
apiRouter.use('/typeFood', typeFoodRouter);
apiRouter.use('/users', userRouter);

module.exports = apiRouter;


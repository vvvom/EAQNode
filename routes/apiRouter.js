const apiRouter = require('express').Router();

const cafeRouter = require('./cafe');
const userRouter = require('./user');
const typeFoodRouter = require('./typeFood');
const menuRouter = require('./menu');
const foodRouter = require('./food');

apiRouter.use('/cafes', cafeRouter);
apiRouter.use('/users', userRouter);
apiRouter.use('/typeFoods', typeFoodRouter);
apiRouter.use('/menus', menuRouter);
apiRouter.use('/foods', foodRouter);


module.exports = apiRouter;

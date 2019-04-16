const apiRouter = require('express').Router();
const userRouter = require('./userRouter');
const cafeRouter = require('./cafeRouter');
const menuRouter = require('./menuRouter');
const foodRouter = require('./foodRouter');

apiRouter.use('/users',userRouter);
apiRouter.use('/cafes',cafeRouter);
apiRouter.use('/menus',menuRouter);
apiRouter.use('/food',foodRouter);

module.exports = apiRouter;
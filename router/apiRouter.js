const apiRouter = require('express').Router();
const userRouter = require('./userRouter');
const cafeRouter = require('./cafeRouter');
const menuRouter = require('./menuRouter');

apiRouter.use('/users',userRouter);
apiRouter.use('/cafes',cafeRouter);
apiRouter.use('/menus',menuRouter);

module.exports = apiRouter;
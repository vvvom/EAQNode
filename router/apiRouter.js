const apiRouter = require('express').Router();
const cafeRouter = require('./cafeRouter');
const adminRouter = require('./adminRouter');

apiRouter.use('/cafes',cafeRouter);
apiRouter.use('/admin',adminRouter);

module.exports = apiRouter;
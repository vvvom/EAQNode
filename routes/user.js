const userRouter = require('express').Router();

const loginationUser = require('../controllers/user/loginationUser');

userRouter.post('/users', loginationUser);

module.exports = userRouter;

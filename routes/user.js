const userRouter = require('express').Router();

const loginUser = require('../controllers/user/loginUser');

userRouter.post('/login', loginUser);


module.exports = userRouter;

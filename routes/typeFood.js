const typeFoodRouter = require('express').Router();

const addTypeFood = require('../controllers/typeFood/addTypeFood');

typeFoodRouter.post('/', addTypeFood);


module.exports = typeFoodRouter;

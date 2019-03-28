const foodRouter = require('express').Router();

const addFood = require('./../controllers/food/addFood');

foodRouter.post('/', addFood);


module.exports = foodRouter;

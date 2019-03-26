const foodRouter = require('express').Router();

const findFoodById = require('../controllers/food/findFoodById');
const findAllFood = require('../controllers/food/findAllFood');
const addFood = require('../controllers/food/addFood');
const updateFood = require('../controllers/food/updateFood');
const deleteFood = require('../controllers/food/deleteFood');



foodRouter.get('/:id', findFoodById);
foodRouter.get('/',findAllFood);
foodRouter.post('/', addFood);
foodRouter.put('/:id', updateFood);
foodRouter.delete('/:id', deleteFood);


module.exports = foodRouter;

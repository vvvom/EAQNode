const foodRouter = require('express').Router();

const findFoodByName = require('../controllers/food/findFoodByName');
const findAllFood = require('../controllers/food/findAllFood');
const addFood = require('../controllers/food/addFood');
const updateFood = require('../controllers/food/updateFood');
const deleteFood = require('../controllers/food/deleteFood');



foodRouter.get('/:name', findFoodByName);
foodRouter.get('/',findAllFood);
foodRouter.post('/', addFood);
foodRouter.put('/:name', updateFood);
foodRouter.delete('/:name', deleteFood);


module.exports = foodRouter;

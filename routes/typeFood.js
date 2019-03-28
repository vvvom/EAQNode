let typeFoodRouter = require('express').Router();

const getAllFoodType  = require('../controllers/typeFood/getAllFoodType');
const addFoodType  = require('../controllers/typeFood/addFoodType');
const deleteFoodType  = require('../controllers/typeFood/deleteFoodType');
const findFoodTypeByType  = require('../controllers/typeFood/findFoodTypeByType');
const updateFoodType  = require('../controllers/typeFood/updateFoodType');


typeFoodRouter.get('/', getAllFoodType);
typeFoodRouter.post('/', addFoodType);
typeFoodRouter.delete('/:type', deleteFoodType);
typeFoodRouter.get('/:type', findFoodTypeByType);
typeFoodRouter.put('/:type', updateFoodType);

module.exports = typeFoodRouter;

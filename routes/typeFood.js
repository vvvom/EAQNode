let typeFoodRouter = require('express').Router();

const getAllFoodType  = require('../controllers/typeFood/getAllFoodType');
const addFoodType  = require('../controllers/typeFood/addFoodType');
const deleteFoodType  = require('../controllers/typeFood/deleteFoodType');
const findFoodTypeById  = require('../controllers/typeFood/findFoodTypeById');
const updateFoodType  = require('../controllers/typeFood/updateFoodType');


typeFoodRouter.get('/', getAllFoodType);
typeFoodRouter.post('/', addFoodType);
typeFoodRouter.delete('/:id', deleteFoodType);
typeFoodRouter.get('/:id', findFoodTypeById);
typeFoodRouter.put('/:id', updateFoodType);

module.exports = typeFoodRouter;

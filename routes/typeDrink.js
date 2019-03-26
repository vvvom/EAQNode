
let typeDrinkRouter = require('express').Router();

const getAllDrinkType  = require('../controllers/typeDrink/getAllDrinkType');
const findDrinkTypeById  = require('../controllers/typeDrink/findDrinkTypeById');
const addDrinkType  = require('../controllers/typeDrink/addDrinkType');
const updateTypeDrink  = require('../controllers/typeDrink/updateTypeDrink');
const deleteDrinkType  = require('../controllers/typeDrink/deleteDrinkType');



typeDrinkRouter.get('/', getAllDrinkType);
typeDrinkRouter.get('/:id', findDrinkTypeById);
typeDrinkRouter.post('/', addDrinkType);
typeDrinkRouter.put('/:id', updateTypeDrink);
typeDrinkRouter.delete('/:id', deleteDrinkType);


module.exports = typeDrinkRouter;


let typeDrinkRouter = require('express').Router();

const getAllDrinkType  = require('../controllers/typeDrink/getAllDrinkType');
const findDrinkTypeByType  = require('../controllers/typeDrink/findDrinkTypeByType');
const addDrinkType  = require('../controllers/typeDrink/addDrinkType');
const updateTypeDrink  = require('../controllers/typeDrink/updateTypeDrink');
const deleteDrinkType  = require('../controllers/typeDrink/deleteDrinkType');



typeDrinkRouter.get('/', getAllDrinkType);
typeDrinkRouter.get('/:type', findDrinkTypeByType);
typeDrinkRouter.post('/', addDrinkType);
typeDrinkRouter.put('/:type', updateTypeDrink);
typeDrinkRouter.delete('/:type', deleteDrinkType);


module.exports = typeDrinkRouter;

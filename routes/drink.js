const drinkRouter = require('express').Router();

const findDrinkById = require('../controllers/drink/findDrinkById');
const findAllDrink = require('../controllers/drink/findAllDrink');
const addDrink = require('../controllers/drink/addDrink');
const updateDrink = require('../controllers/drink/updateDrink');
const deleteDrink = require('../controllers/drink/deleteDrink');



drinkRouter.get('/:id', findDrinkById);
drinkRouter.get('/',findAllDrink);
drinkRouter.post('/', addDrink);
drinkRouter.put('/:id', updateDrink);
drinkRouter.delete('/:id', deleteDrink);


module.exports = drinkRouter;

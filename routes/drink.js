const drinkRouter = require('express').Router();

const findDrinkByName = require('../controllers/drink/findDrinkByName');
const findAllDrink = require('../controllers/drink/findAllDrink');
const addDrink = require('../controllers/drink/addDrink');
const updateDrink = require('../controllers/drink/updateDrink');
const deleteDrink = require('../controllers/drink/deleteDrink');



drinkRouter.get('/:name', findDrinkByName);
drinkRouter.get('/',findAllDrink);
drinkRouter.post('/', addDrink);
drinkRouter.put('/:name', updateDrink);
drinkRouter.delete('/:name', deleteDrink);


module.exports = drinkRouter;

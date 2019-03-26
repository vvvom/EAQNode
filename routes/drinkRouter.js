let router = require('express').Router();

const GetAllDrink  = require('../controllers/drink/gotAllDrinks');
const AddDrink  = require('../controllers/drink/addDrink');
const DeleteDrink  = require('../controllers/drink/deleteDrink');
const FindDrinkById  = require('../controllers/drink/fidnDrinkById');
const UpdateDrink  = require('../controllers/drink/updateDrink');


router.get('/', GetAllDrink);
router.post('/', AddDrink);
router.delete('/:id', DeleteDrink);
router.get('/:id', FindDrinkById);
router.put('/:id', UpdateDrink);

module.exports = router;
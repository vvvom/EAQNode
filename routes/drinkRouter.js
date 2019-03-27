const router = require('express').Router();

const addDrink = require('../controllers/drink/addDrink');
const findAllDrink = require('../controllers/drink/findAllDrink');
const findByIdAndUpdateDrink = require('../controllers/drink/findByIdAndUpdateDrink');
const findByIdAndDeleteDrink = require('../controllers/drink/findByIdAndDeleteDrink');

router.get('/',findAllDrink);
router.post('/',addDrink);
router.put('/:id',findByIdAndUpdateDrink);
router.delete('/:id',findByIdAndDeleteDrink);

module.exports = router;

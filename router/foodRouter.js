const router = require('express').Router();

const getAllFood = require('../controllers/food/getAllFood');
const getFoodByName = require('../controllers/food/getFoodByName');
const addFood = require('../controllers/food/addFood');
const updateFoodByName = require('../controllers/food/updateFoodByName');
const deleteFoodByName = require('../controllers/food/deleteFoodByName');

router.get('/',getAllFood);
router.get('/:name',getFoodByName);
router.post('/',addFood);
router.put('/:name',updateFoodByName);
router.delete('/:name',deleteFoodByName);

module.exports = router;
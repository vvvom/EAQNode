const router = require('express').Router();

const GetAllFood  = require('../controllers/food/gotAllFoods');
const AddFood  = require('../controllers/food/addFood');
const DeleteFood  = require('../controllers/food/deleteFood');
const FindFoodById  = require('../controllers/food/fidnFoodByName');
const UpdateFood  = require('../controllers/food/updateFood');


router.get('/', GetAllFood);
router.post('/', AddFood);
router.delete('/:id', DeleteFood);
router.get('/:id', FindFoodById);
router.put('/:id', UpdateFood);

module.exports = router;

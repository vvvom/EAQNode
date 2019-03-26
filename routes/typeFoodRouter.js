let router = require('express').Router();

const GetAllFoodType  = require('../controllers/type_food/gotAllFoodTypes');
const AddFoodType  = require('../controllers/type_food/addFoodType');
const DeleteFoodType  = require('../controllers/type_food/deleteFoodType');
const FindFoodTypeByName  = require('../controllers/type_food/findFoodTypeByName');


router.get('/', GetAllFoodType);
router.post('/', AddFoodType);
router.delete('/:name', DeleteFoodType);
router.get('/:name', FindFoodTypeByName);

module.exports = router;
const router = require('express').Router();

const GetAllFoodType  = require('../controllers/type_food/gotAllFoodTypes');
const AddFoodType  = require('../controllers/type_food/addFoodType');
const DeleteFoodType  = require('../controllers/type_food/deleteFoodType');
const FindFoodTypeByName  = require('../controllers/type_food/findFoodTypeByType');
const UpdateFoodType  = require('../controllers/type_food/updateFoodType');


router.get('/', GetAllFoodType);
router.post('/', AddFoodType);
router.delete('/:type', DeleteFoodType);
router.get('/:type', FindFoodTypeByName);
router.put('/:type', UpdateFoodType);

module.exports = router;
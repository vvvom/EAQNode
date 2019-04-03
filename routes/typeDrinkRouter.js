const router = require('express').Router();

const GetAllDrinkType  = require('../controllers/type_drink/gotAllDrinkTypes');
const AddDrinkType  = require('../controllers/type_drink/addDrinkType');
const DeleteDrinkType  = require('../controllers/type_drink/deleteDrinkType');
const FindDrinkTypeByName  = require('../controllers/type_drink/findDrinkTypeByType');
const UpdateDrinkType  = require('../controllers/type_drink/updateDrinkType');


router.get('/', GetAllDrinkType);
router.post('/', AddDrinkType);
router.delete('/:type', DeleteDrinkType);
router.get('/:type', FindDrinkTypeByName);
router.put('/:type', UpdateDrinkType);

module.exports = router;
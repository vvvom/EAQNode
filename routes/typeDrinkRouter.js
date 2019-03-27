let router = require('express').Router();

const GetAllDrinkType  = require('../controllers/type_drink/gotAllDrinkTypes');
const AddDrinkType  = require('../controllers/type_drink/addDrinkType');
const DeleteDrinkType  = require('../controllers/type_drink/deleteDrinkType');
const FindDrinkTypeByName  = require('../controllers/type_drink/findDrinkTypeById');
const UpdateDrinkType  = require('../controllers/type_drink/updateDrinkType');


router.get('/', GetAllDrinkType);
router.post('/', AddDrinkType);
router.delete('/:id', DeleteDrinkType);
router.get('/:id', FindDrinkTypeByName);
router.put('/:id', UpdateDrinkType);

module.exports = router;
let router = require('express').Router();

const GetAllDrinkType  = require('../controllers/type_drink/gotAllDrinkTypes');
const AddDrinkType  = require('../controllers/type_drink/addDrinkType');
const DeleteDrinkType  = require('../controllers/type_drink/deleteDrinkType');
const FindDrinkTypeByName  = require('../controllers/type_drink/findDrinkTypeByName');


router.get('/', GetAllDrinkType);
router.post('/', AddDrinkType);
router.delete('/:name', DeleteDrinkType);
router.get('/:name', FindDrinkTypeByName);

module.exports = router;
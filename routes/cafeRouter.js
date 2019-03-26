let router = require('express').Router();

const GetAllCafes  = require('../controllers/cafe/gotAllCafe');
const AddCafe  = require('../controllers/cafe/registerCafe');
const DeleteCafe  = require('../controllers/cafe/deleteCafe');
const FindCafeById  = require('../controllers/cafe/findCafeByName');
const UpdateCafe  = require('../controllers/cafe/updateCafe');


router.get('/', GetAllCafes);
router.post('/', AddCafe);
router.delete('/:name', DeleteCafe);
router.get('/:name', FindCafeById);
router.put('/:name', UpdateCafe);

module.exports = router;
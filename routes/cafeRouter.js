let router = require('express').Router();

const GetAllCafes  = require('../controllers/cafe/gotAllCafe');
const AddCafe  = require('../controllers/cafe/addCafe');
const DeleteCafe  = require('../controllers/cafe/deleteCafe');
const FindCafeById  = require('../controllers/cafe/findCafeById');
const UpdateCafe  = require('../controllers/cafe/updateCafe');


router.get('/', GetAllCafes);
router.post('/', AddCafe);
router.delete('/:id', DeleteCafe);
router.get('/:id', FindCafeById);
router.put('/:id', UpdateCafe);

module.exports = router;
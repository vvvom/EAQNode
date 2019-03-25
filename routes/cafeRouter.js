let router = require('express').Router();

const getAllCafes  = require('../controllers/cafe/gotAllCafe');
const addCafe  = require('../controllers/cafe/addCafe');
const deleteCafe  = require('../controllers/cafe/deleteCafe');
const findCafeById  = require('../controllers/cafe/findCafeById');
const updateCafe  = require('../controllers/cafe/updateCafe');


router.get('/', getAllCafes);
router.post('/', addCafe);
router.delete('/:id', deleteCafe);
router.get('/:id', findCafeById);
router.put('/:id', updateCafe);

module.exports = router;

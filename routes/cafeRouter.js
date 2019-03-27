let router = require('express').Router();

const findAllCafe  = require('../controllers/cafe/findAllCafe');
const addCafe  = require('../controllers/cafe/addCafe');
const deleteCafeById  = require('../controllers/cafe/deleteCafeById');
const findCafeByName  = require('../controllers/cafe/findCafeByName');
const updateCafeById  = require('../controllers/cafe/updateCafeById');
const registerCafe  = require('../controllers/cafe/registerCafe');


router.get('/', findAllCafe);
router.post('/', addCafe);
router.delete('/:id', deleteCafeById);
router.get('/:name', findCafeByName);
router.put('/:id', updateCafeById);
router.post('/', registerCafe);

module.exports = router;

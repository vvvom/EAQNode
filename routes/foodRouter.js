const router = require('express').Router();

const getAllFood  = require('../controllers/food/findAllFood');
const addFood  = require('../controllers/food/addFood');
const findByIdAndDeleteFood  = require('../controllers/food/findByIdAndDeleteFood');
const findByIdAndUpdateFood  = require('../controllers/food/findByIdAndUpdateFood');

router.get('/', getAllFood);
router.post('/', addFood);
router.put('/:id', findByIdAndUpdateFood);
router.delete('/:id', findByIdAndDeleteFood);

module.exports = router;

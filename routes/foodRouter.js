let router = require('express').Router();

const getAllFood  = require('../controllers/food/getAllFood');
const addFood  = require('../controllers/food/addFood');
const deleteFood  = require('../controllers/food/deleteFood');
const updateFood  = require('../controllers/food/updateFood');


router.get('/', getAllFood);
router.post('/', addFood);
router.put('/:id', updateFood);
router.delete('/:id', deleteFood);

module.exports = router;

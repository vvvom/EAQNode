const router = require('express').Router();

const getOneByName = require('../controllers/cafe/getOneByName');
const getAllCafes = require('../controllers/cafe/getAllCafes');
const registerCafe = require('../controllers/cafe/registerCafe');

router.get('/:name', getOneByName);
router.get('/', getAllCafes);
router.post('/' , registerCafe);


module.exports = router;
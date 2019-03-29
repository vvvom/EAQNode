const router = require('express').Router();

const getOneByName = require('../controllers/cafe/getOneByName');
const getCafeFromToken = require('../controllers/cafe/getCafeFromToken');
const getAllCafes = require('../controllers/cafe/getAllCafes');
const registerCafe = require('../controllers/cafe/registerCafe');
const loginCafe = require('../controllers/cafe/loginCafe');
const updateCafe = require('../controllers/cafe/updateCafe');
const deleteCafe = require('../controllers/cafe/deleteCafe');

router.get('/:name', getOneByName);
router.get('/', getAllCafes);
router.get('/info/token', getCafeFromToken);
router.post('/register' , registerCafe);
router.post('/login' , loginCafe);
router.put('/:name' , updateCafe);
router.delete('/:name' , deleteCafe);


module.exports = router;
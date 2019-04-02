const router = require('express').Router();

const getOneByName = require('../controllers/cafe/getOneByName');
const getCafeFromToken = require('../controllers/cafe/getCafeFromToken');
const getAllCafes = require('../controllers/cafe/getAllCafes');
const registerCafe = require('../controllers/cafe/registerCafe');
const loginCafe = require('../controllers/cafe/loginCafe');
const updateCafeForName = require('../controllers/cafe/updateCafeForName');
const updateCafeForPass = require('../controllers/cafe/updateCafeForPass');
const deleteCafe = require('../controllers/cafe/deleteCafe');

router.get('/:name', getOneByName);
router.get('/', getAllCafes);
router.get('/info/token', getCafeFromToken);
router.post('/register' , registerCafe);
router.post('/login' , loginCafe);
router.put('/update/name/:name' , updateCafeForName);
router.put('/update/pass/:name' , updateCafeForPass);
router.delete('/:name' , deleteCafe);


module.exports = router;
const cafeRouter = require('express').Router();

const getAllCafes = require('./../controllers/cafe/getAllCafes');
const getCafeFromToken = require('../controllers/cafe/getCafeFromToken');
const registerCafe = require('../controllers/cafe/registerCafe');
const loginCafe = require('../controllers/cafe/loginCafe');
const updateCafeByName = require('./../controllers/cafe/updateCafeByName');
const deleteCafeByName = require('./../controllers/cafe/deleteCafeByName');

cafeRouter.get('/', getAllCafes);
cafeRouter.get('/info/token', getCafeFromToken);
cafeRouter.post('/register', registerCafe);
cafeRouter.post('/login', loginCafe);
cafeRouter.put('/:name', updateCafeByName);
cafeRouter.delete('/:name', deleteCafeByName);

module.exports = cafeRouter;

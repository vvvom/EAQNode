const cafeRouter = require('express').Router();

const findAllCafe = require('./../controllers/cafe/findAllCafe');
const findCafeByName = require('../controllers/cafe/findCafeByName');
const registerCafe = require('../controllers/cafe/registerCafe');
const loginationCafe = require('../controllers/cafe/loginationCafe');
const updateCafe = require('./../controllers/cafe/updateCafe');
const deleteCafe = require('./../controllers/cafe/deleteCafe');
const getCafeByToken = require('./../controllers/cafe/getCafeByToken');


cafeRouter.get('/',findAllCafe );
cafeRouter.get('/:name', findCafeByName);
cafeRouter.post('/register', registerCafe);
cafeRouter.post('/login', loginationCafe);
cafeRouter.put('/:name', updateCafe);
cafeRouter.delete('/:name', deleteCafe);
cafeRouter.get('/info/token', getCafeByToken);



module.exports = cafeRouter;



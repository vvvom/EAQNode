const cafeRouter = require('express').Router();

const findAllCafe = require('./../controllers/cafe/findAllCafe');
const findCafeByName = require('../controllers/cafe/findCafeByName');
const registerCafe = require('../controllers/cafe/registerCafe');
const updateCafe = require('./../controllers/cafe/updateCafe');
const deleteCafe = require('./../controllers/cafe/deleteCafe');


cafeRouter.get('/',findAllCafe );
cafeRouter.get('/:name', findCafeByName);
cafeRouter.post('/', registerCafe);
cafeRouter.put('/:name', updateCafe);
cafeRouter.delete('/:name', deleteCafe);



module.exports = cafeRouter;



const cafeRouter = require('express').Router();

const getAllCafes = require('./../controllers/cafe/getAllCafes');
const getCafeByName = require('./../controllers/cafe/getCafeByName');
const addCafe = require('./../controllers/cafe/addCafe');
const updateCafeByName = require('./../controllers/cafe/updateCafeByName');
const deleteCafeByName = require('./../controllers/cafe/deleteCafeByName');

cafeRouter.get('/', getAllCafes);
cafeRouter.get('/:name', getCafeByName);
cafeRouter.post('/', addCafe);
cafeRouter.put('/:name', updateCafeByName);
cafeRouter.delete('/:name', deleteCafeByName);

module.exports = cafeRouter;

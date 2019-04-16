const router = require('express').Router();

const getMenu = require('../controllers/menu/getMenu');
const addMenu = require('../controllers/menu/addMenu');
const updateMenu = require('../controllers/menu/updateMenu');
const deleteMenu = require('../controllers/menu/deleteMenu');


router.get('/',getMenu);
router.post('/',addMenu);
router.put('/:name',updateMenu);
router.delete('/:name',deleteMenu);

module.exports = router;

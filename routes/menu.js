const menuRouter = require('express').Router();

const findAllMenu = require('../controllers/menu/findAllMenu');
const findMenuByName = require('../controllers/menu/findMenuByName');
const addMenu = require('../controllers/menu/addMenu');
const updateMenu = require('../controllers/menu/updateMenu');
const deleteMenu = require('../controllers/menu/deleteMenu');

menuRouter.get('/',findAllMenu);
menuRouter.get('/:name', findMenuByName);
menuRouter.post('/', addMenu);
menuRouter.put('/:name', updateMenu);
menuRouter.delete('/:name', deleteMenu);

module.exports = menuRouter;

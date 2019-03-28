const menuRouter = require('express').Router();

const addMenu = require('./../controllers/menu/addMenu');

menuRouter.post('/', addMenu);

module.exports = menuRouter;

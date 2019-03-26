const orderRouter = require('express').Router();

const findAllOrder = require('../controllers/order/findAllOrder');
const findOrderById = require('../controllers/order/findOrderById');
const addOrder = require('../controllers/order/addOrder');
const deleteOrder = require('../controllers/order/deleteOrder');

orderRouter.get('/',findAllOrder);
orderRouter.get('/:id', findOrderById);
orderRouter.post('/', addOrder);
orderRouter.delete('/:id', deleteOrder);

module.exports = orderRouter;

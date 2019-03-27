const router = require('express').Router();

const findAllOrders  = require('../controllers/order/findAllOrders');
const addOrder  = require('../controllers/order/addOrder');
const findByIdAndDeleteOrder = require('../controllers/order/findByIdAndDeleteOrder');
const findByIdAndUpdateOrder  = require('../controllers/order/findByIdAndUpdateOrder');

router.get('/', findAllOrders);
router.post('/', addOrder);
router.put('/:id', findByIdAndUpdateOrder);
router.delete('/:id', findByIdAndDeleteOrder);

module.exports = router;

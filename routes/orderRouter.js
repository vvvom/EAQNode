let router = require('express').Router();

const GetAllOrders  = require('../controllers/order/gotAllOrders');
const AddOrder  = require('../controllers/order/addOrder');
const DeleteOrder  = require('../controllers/order/deleteOrder');
const FindOrderById  = require('../controllers/order/fidnOrderById');
const UpdateCafe  = require('../controllers/cafe/updateCafe');


router.get('/', GetAllOrders);
router.post('/', AddOrder);
router.delete('/:id', DeleteOrder);
router.get('/:id', FindOrderById);
router.put('/:id', UpdateCafe);

module.exports = router;
let router = require('express').Router();

const FindPaymentById  = require('../controllers/payment/fidnPaymentById');

router.get('/:id', FindPaymentById);

module.exports = router;
const router = require('express').Router();

const FindPaymentByType = require('../controllers/payment/fidnPaymentByType');
const GotAllPayments  = require('../controllers/payment/gotAllPayments');

router.get('/:type', FindPaymentByType);
router.get('/', GotAllPayments);

module.exports = router;
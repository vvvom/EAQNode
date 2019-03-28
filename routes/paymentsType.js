const paymentsTypeRouter = require('express').Router();

const findPaymentsTypeByType = require('../controllers/paymentsType/findPaymentsTypeByType');
const findAllPaymentsType = require('../controllers/paymentsType/findAllPaymentsType');


paymentsTypeRouter.get('/:type', findPaymentsTypeByType);
paymentsTypeRouter.get('/',findAllPaymentsType);


module.exports = paymentsTypeRouter;

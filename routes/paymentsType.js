const paymentsTypeRouter = require('express').Router();

const findPaymentsTypeById = require('../controllers/paymentsType/findPaymentsTypeById');
const findAllPaymentsType = require('../controllers/paymentsType/findAllPaymentsType');


paymentsTypeRouter.get('/:id', findPaymentsTypeById);
paymentsTypeRouter.get('/',findAllPaymentsType);


module.exports = paymentsTypeRouter;

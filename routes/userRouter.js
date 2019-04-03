const router = require('express').Router();

const LoginationUser  = require('../controllers/user/loginationUser');

router.post('/', LoginationUser);

module.exports = router;
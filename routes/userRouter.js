let router = require('express').Router();

const LoginationUser  = require('../controllers/user/loginationUser');

router.post('/loginations/users', LoginationUser);

module.exports = router;
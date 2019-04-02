const router = require('express').Router();
const loginUser = require('../controllers/user/loginUser');

router.post('/', loginUser);

module.exports = router;
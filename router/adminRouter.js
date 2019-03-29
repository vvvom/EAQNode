const router = require('express').Router();
const loginAdmin = require('../controllers/admin/loginAdmin');

router.post('/', loginAdmin);

module.exports = router;
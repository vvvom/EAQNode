let router = require('express').Router();

const GetAllCafes  = require('../controllers/cafe/gotAllCafe');
const AddCafe  = require('../controllers/cafe/addCafe');


router.get('/', GetAllCafes);
router.post('/', AddCafe);

module.exports = router;
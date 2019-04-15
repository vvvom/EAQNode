const router = require('express').Router();

const GetAllCafes  = require('../controllers/cafe/gotAllCafe');
const RegisterCafe  = require('../controllers/cafe/registerCafe');
const DeleteCafe  = require('../controllers/cafe/deleteCafe');
const FindCafeById  = require('../controllers/cafe/findCafeByName');
const UpdateCafeName  = require('../controllers/cafe/updateCafeName');
const UpdateCafePassword  = require('../controllers/cafe/updateCafePassword');
const LoginationCafe  = require('../controllers/cafe/loginationCafe');


router.get('/', GetAllCafes);
router.post('/register', RegisterCafe);
router.delete('/:name', DeleteCafe);
router.get('/:name', FindCafeById);
router.put('/updateCafeName/:name', UpdateCafeName);
router.put('/updateCafePassword/:name', UpdateCafePassword);
router.post('/login', LoginationCafe);

module.exports = router;

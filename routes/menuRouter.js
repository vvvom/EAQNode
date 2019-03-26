let router = require('express').Router();

const GetAllMenu  = require('../controllers/menu/gotAllMenu');
const AddMenu  = require('../controllers/menu/addMenu');
const DeleteMenu  = require('../controllers/menu/deleteMenu');
const FindMenuById  = require('../controllers/menu/findMenuyName');
const UpdateMenu  = require('../controllers/menu/updateMenu');


router.get('/', GetAllMenu);
router.post('/', AddMenu);
router.delete('/:name', DeleteMenu);
router.get('/:name', FindMenuById);
router.put('/:name', UpdateMenu);

module.exports = router;
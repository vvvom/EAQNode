const router = require('express').Router();

const findAllMenu  = require('../controllers/menu/findAllMenu');
const addMenu  = require('../controllers/menu/addMenu');
const findByIdAndDeleteMenu = require('../controllers/menu/findByIdAndDeleteMenu');
const findByIdAndUpdateMenu  = require('../controllers/menu/findByIdAndUpdateMenu');

router.get('/', findAllMenu);
router.post('/', addMenu);
router.put('/:id', findByIdAndUpdateMenu);
router.delete('/:id', findByIdAndDeleteMenu);

module.exports = router;

const router = require('express').Router();

const findAll  = require('../controllers/refJournal/findAll');
const findByIdAndUpdateJournal  = require('../controllers/refJournal/findByIdAndUpdateJournal');
const findByIdAndDeleteJournal  = require('../controllers/refJournal/findByIdAndDeleteJournal');

router.get('/', findAll);
router.put('/:id', findByIdAndUpdateJournal);
router.delete('/:id', findByIdAndDeleteJournal);

module.exports = router;

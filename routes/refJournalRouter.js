let router = require('express').Router();

const GetAllRecords  = require('../controllers/ref_journal/gotAllRecords');
const AddRecord  = require('../controllers/ref_journal/addRecord')
const DeleteRecord  = require('../controllers/ref_journal/deleteRecord');
const FindRecordById  = require('../controllers/ref_journal/fidnRecordById');
const UpdateRecord  = require('../controllers/ref_journal/updateRecord');


router.get('/', GetAllRecords);
router.post('/', AddRecord);
router.delete('/:id', DeleteRecord);
router.get('/:id', FindRecordById);
router.put('/:id', UpdateRecord);

module.exports = router;
let refJournalRouter = require('express').Router();

const getAllRecords  = require('../controllers/refJournal/getAllRecords');
const addRecord  = require('../controllers/refJournal/addRecord');
const deleteRecord  = require('../controllers/refJournal/deleteRecord');
const findRecordById  = require('../controllers/refJournal/findRecordById');
const updateRecord  = require('../controllers/refJournal/updateRecord');


refJournalRouter.get('/', getAllRecords);
refJournalRouter.post('/', addRecord);
refJournalRouter.delete('/:id', deleteRecord);
refJournalRouter.get('/:id', findRecordById);
refJournalRouter.put('/:id', updateRecord);

module.exports = refJournalRouter;

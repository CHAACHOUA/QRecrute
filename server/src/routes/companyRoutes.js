const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware');
const { getCandidatesEncountered, addNoteOnCandidate } = require('../controllers/companyController');

router.use(authMiddleware);

router.get('/encountered', getCandidatesEncountered);
router.post('/note', addNoteOnCandidate);

module.exports = router;

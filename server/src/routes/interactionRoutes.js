const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware');
const { getInteractionsByCandidate, getInteractionsBySalon } = require('../controllers/interactionController');

router.use(authMiddleware);

router.get('/candidate', getInteractionsByCandidate);
router.get('/salon/:salonId', getInteractionsBySalon);

module.exports = router;

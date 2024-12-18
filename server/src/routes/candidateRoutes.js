const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware');
const { getProfile, updateProfile } = require('../controllers/candidateController');

router.use(authMiddleware);

router.get('/profile', getProfile);
router.post('/profile', updateProfile);

module.exports = router;

const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware');
const { getSalonCompanies, getCoOrganizers } = require('../controllers/organizerController');

router.use(authMiddleware);

router.get('/:salonId/companies', getSalonCompanies);
router.get('/:salonId/coorganizers', getCoOrganizers);

module.exports = router;

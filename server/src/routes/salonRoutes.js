const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware');
const { getSalonDetails, setSalonVisibility, addCompanyToSalon, addCoOrganizer } = require('../controllers/salonController');

router.use(authMiddleware);

router.get('/:salonId', getSalonDetails); 
router.post('/:salonId/visibility', setSalonVisibility);
router.post('/:salonId/company', addCompanyToSalon);
router.post('/:salonId/coorganizer', addCoOrganizer);

module.exports = router;

const express = require('express');
const router = express.Router();
const authRoutes = require('./authRoutes');
const candidateRoutes = require('./candidateRoutes');
const companyRoutes = require('./companyRoutes');
const salonRoutes = require('./salonRoutes');
const organizerRoutes = require('./organizerRoutes');
const interactionRoutes = require('./interactionRoutes');

router.use('/auth', authRoutes);
router.use('/candidates', candidateRoutes);
router.use('/companies', companyRoutes);
router.use('/salons', salonRoutes);
router.use('/organizers', organizerRoutes);
router.use('/interactions', interactionRoutes);

module.exports = router;

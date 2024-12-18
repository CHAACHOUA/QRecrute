const Salon = require('../models/Salon');
const CoOrganizer = require('../models/CoOrganizer');
const SalonCompany = require('../models/SalonCompany');
const Company = require('../models/Company');

module.exports = {
  getSalonCompanies: async (req, res) => {
    // Affiche la liste des entreprises d’un salon
    if (req.user.role !== 'organisateur') {
      return res.status(403).json({error:'Access denied'});
    }
    const { salonId } = req.params;
    const companies = await SalonCompany.findAll({ where:{salonId}, include:[Company] });
    return res.json(companies);
  },

  getCoOrganizers: async (req, res) => {
    if (req.user.role !== 'organisateur') {
      return res.status(403).json({error:'Access denied'});
    }
    const { salonId } = req.params;
    const coOrganizers = await CoOrganizer.findAll({ where:{salonId} });
    return res.json(coOrganizers);
  }
};

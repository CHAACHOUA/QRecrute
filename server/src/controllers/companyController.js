const Interaction = require('../models/Interaction');
const Candidate = require('../models/Candidate');
const Company = require('../models/Company');
const Salon = require('../models/Salon');

module.exports = {
  getCandidatesEncountered: async (req, res) => {
    if (req.user.role !== 'entreprise') {
      return res.status(403).json({error:'Access denied'});
    }

    const { salonId } = req.query; 
    // On vérifie que l’entreprise a accès au salon (logique à implémenter)
    // Pour simplifier, on n’ajoute pas ici la vérification, mais en réel, il faudrait.

    const interactions = await Interaction.findAll({
      where: { companyId: req.user.id, salonId },
      include: [{ model: Candidate }]
    });
    return res.json(interactions);
  },

  addNoteOnCandidate: async (req, res) => {
    if (req.user.role !== 'entreprise') {
      return res.status(403).json({error:'Access denied'});
    }
    const { interactionId, note } = req.body;
    const interaction = await Interaction.findOne({ where: { id:interactionId, companyId:req.user.id }});
    if(!interaction) return res.status(404).json({error:'Interaction not found or not yours'});
    
    interaction.note_interne_entreprise = note;
    await interaction.save();
    return res.json(interaction);
  }
};

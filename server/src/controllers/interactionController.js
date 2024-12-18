const Interaction = require('../models/Interaction');
const Salon = require('../models/Salon');

module.exports = {
  getInteractionsByCandidate: async (req, res) => {
    // Accessible au candidat pour voir qui l’a scanné
    if (req.user.role !== 'candidat') {
      return res.status(403).json({error:'Access denied'});
    }

    const interactions = await Interaction.findAll({ where: { candidateId: req.user.id }});
    return res.json(interactions);
  },

  getInteractionsBySalon: async (req, res) => {
    // Accessible à l’organisateur d’un salon
    const { salonId } = req.params;
    const salon = await Salon.findByPk(salonId);
    if(!salon) return res.status(404).json({error:'Salon not found'});

    // Vérification du rôle et droits
    if (req.user.role !== 'organisateur') {
      return res.status(403).json({error:'Access denied'});
    }

    const interactions = await Interaction.findAll({ where:{ salonId } });
    return res.json(interactions);
  }
};


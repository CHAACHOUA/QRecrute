const Salon = require('../models/Salon');
const User = require('../models/User');
const Company = require('../models/Company');
const SalonCompany = require('../models/SalonCompany');
const CoOrganizer = require('../models/CoOrganizer');

module.exports = {
  getSalonDetails: async (req, res) => {
    const { salonId } = req.params;
    const salon = await Salon.findByPk(salonId);
    if(!salon) return res.status(404).json({error:'Salon not found'});
    return res.json(salon);
  },

  setSalonVisibility: async (req, res) => {
    const { salonId } = req.params;
    const { type } = req.body; // 'public' ou 'prive'
    const salon = await Salon.findByPk(salonId);
    if(!salon) return res.status(404).json({error:'Salon not found'});

    // Vérifier que l'utilisateur est l'organisateur principal du salon
    if (req.user.role !== 'organisateur' || salon.organisateurPrincipalId !== req.user.id) {
      return res.status(403).json({error:'Access denied'});
    }

    salon.type = type === 'public' ? 'public' : 'prive';
    await salon.save();
    return res.json(salon);
  },

  addCompanyToSalon: async (req, res) => {
    const { salonId } = req.params;
    const { companyEmail } = req.body;
    const salon = await Salon.findByPk(salonId);
    if(!salon) return res.status(404).json({error:'Salon not found'});

    // Vérifier que l'utilisateur est organisateur (principal ou co-organisateur)
    // Logique simplifiée : juste organisateur principal pour l’exemple
    if (req.user.role !== 'organisateur') {
      return res.status(403).json({error:'Access denied'});
    }

    const user = await User.findOne({ where:{ email:companyEmail }});
    let company;
    if(!user){
      // Envoyer une invitation par email dans la vraie implémentation
      // Pour l’instant, on simule la création d’un compte entreprise
      const newUser = await User.create({email:companyEmail, passwordHash:'', role:'entreprise'});
      company = await Company.create({ userId:newUser.id, nom:'Entreprise' });
    } else {
      // Vérifier que c’est bien une entreprise, sinon mettre à jour le rôle si nécessaire
      if(user.role !== 'entreprise') {
        return res.status(400).json({error:'User is not an entreprise'});
      }
      company = await Company.findOne({ where: { userId: user.id }});
    }

    await SalonCompany.create({ salonId: salon.id, companyId: company.id });
    return res.json({message:'Company added to salon', company});
  },

  addCoOrganizer: async (req, res) => {
    const { salonId } = req.params;
    const { coOrganizerEmail } = req.body;
    const salon = await Salon.findByPk(salonId);
    if(!salon) return res.status(404).json({error:'Salon not found'});

    if (req.user.role !== 'organisateur' || salon.organisateurPrincipalId !== req.user.id) {
      return res.status(403).json({error:'Access denied'});
    }

    let coUser = await User.findOne({ where:{ email:coOrganizerEmail }});
    if(!coUser){
      // Créer un compte organisateur
      coUser = await User.create({email:coOrganizerEmail, passwordHash:'', role:'organisateur'});
    }
    await CoOrganizer.create({ salonId:salon.id, userId:coUser.id });
    return res.json({message:'Co-organisateur ajouté', coOrganizerEmail});
  }
};

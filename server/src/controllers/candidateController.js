const Candidate = require('../models/Candidate');

module.exports = {
  getProfile: async (req, res) => {
    // req.user contient l'utilisateur courant, on vérifie son rôle et ID
    if (req.user.role !== 'candidat') {
      return res.status(403).json({error: 'Access denied'});
    }
    const candidate = await Candidate.findOne({ where: { userId: req.user.id }});
    if (!candidate) return res.status(404).json({error: 'Candidate profile not found'});
    return res.json(candidate);
  },

  updateProfile: async (req, res) => {
    if (req.user.role !== 'candidat') {
      return res.status(403).json({error: 'Access denied'});
    }
    const { nom, prenom, tel, cv_url } = req.body;
    const candidate = await Candidate.findOne({ where: { userId: req.user.id }});
    if (!candidate) return res.status(404).json({error: 'Candidate profile not found'});

    candidate.nom = nom || candidate.nom;
    candidate.prenom = prenom || candidate.prenom;
    candidate.tel = tel || candidate.tel;
    candidate.cv_url = cv_url || candidate.cv_url;
    await candidate.save();

    return res.json(candidate);
  }
};

const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');
const Candidate = require('./Candidate');
const Company = require('./Company');
const Salon = require('./Salon');
const Interaction = sequelize.define('Interaction', {
  date_interaction: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  note_interne_entreprise: DataTypes.TEXT
});
Interaction.belongsTo(Candidate, { foreignKey: 'candidateId' });
Interaction.belongsTo(Company, { foreignKey: 'companyId' });
Interaction.belongsTo(Salon, { foreignKey: 'salonId' });
module.exports = Interaction;

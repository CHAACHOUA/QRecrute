const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');
const User = require('./User');
const Salon = sequelize.define('Salon', {
  nom: DataTypes.STRING,
  date_debut: DataTypes.DATE,
  date_fin: DataTypes.DATE,
  lieu: DataTypes.STRING,
  type: DataTypes.ENUM('public','prive')
});
Salon.belongsTo(User, { as: 'organisateur_principal', foreignKey: 'organisateurPrincipalId' });
module.exports = Salon;

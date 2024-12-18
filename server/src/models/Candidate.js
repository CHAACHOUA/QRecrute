const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');
const User = require('./User');
const Candidate = sequelize.define('Candidate', {
  nom: DataTypes.STRING,
  prenom: DataTypes.STRING,
  tel: DataTypes.STRING,
  cv_url: DataTypes.STRING,
  qr_code_url: DataTypes.STRING
});
Candidate.belongsTo(User, { foreignKey: 'userId', onDelete: 'CASCADE' });
User.hasOne(Candidate, { foreignKey: 'userId' });
module.exports = Candidate;

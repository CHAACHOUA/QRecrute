const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');
const User = require('./User');
const Company = sequelize.define('Company', {
  nom: DataTypes.STRING,
  logo_url: DataTypes.STRING,
  secteur: DataTypes.STRING,
  description: DataTypes.TEXT,
  contact_email: DataTypes.STRING
});
Company.belongsTo(User, { foreignKey: 'userId', onDelete: 'CASCADE' });
User.hasOne(Company, { foreignKey: 'userId' });
module.exports = Company;

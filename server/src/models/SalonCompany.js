const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');
const Company = require('./Company');
const Salon = require('./Salon');
const SalonCompany = sequelize.define('SalonCompany', {}, { tableName: 'Salons_Entreprises' });
SalonCompany.belongsTo(Salon, { foreignKey: 'salonId' });
SalonCompany.belongsTo(Company, { foreignKey: 'companyId' });
module.exports = SalonCompany;

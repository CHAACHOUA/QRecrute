const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');
const User = require('./User');
const Salon = require('./Salon');
const CoOrganizer = sequelize.define('CoOrganizer', {}, { tableName: 'CoOrganisateurs' });
CoOrganizer.belongsTo(User, { foreignKey: 'userId' });
CoOrganizer.belongsTo(Salon, { foreignKey: 'salonId' });
module.exports = CoOrganizer;

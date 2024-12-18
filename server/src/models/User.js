const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

// role: 'admin_platforme', 'organisateur', 'entreprise', 'candidat'
const User = sequelize.define('User', {
  email: { type: DataTypes.STRING, unique: true },
  passwordHash: DataTypes.STRING,
  role: DataTypes.ENUM('admin_platforme', 'organisateur', 'entreprise', 'candidat')
});

module.exports = User;

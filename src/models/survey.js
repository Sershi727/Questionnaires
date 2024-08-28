const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const Survey = sequelize.define('Survey', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  language: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  technologies: {
    type: DataTypes.JSON, // хранение данных в формате JSON
  },
  comments: {
    type: DataTypes.TEXT,
  }
}, {
  tableName: 'surveys',
});

module.exports = Survey;

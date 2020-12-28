'use strict';

const DataTypes = require('sequelize').DataTypes;

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.createTable('users', {
      id: { type: DataTypes.INTEGER, allowNull: false, autoIncrement: true, primaryKey: true },
      username: { type: DataTypes.STRING(64), allowNull: false, unique: true },
      password: { type: DataTypes.STRING(64), allowNull: false },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
    })
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.dropTable('users');
  }
};

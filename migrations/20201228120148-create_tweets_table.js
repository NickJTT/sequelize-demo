'use strict';

const DataTypes = require('sequelize').DataTypes;

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.createTable('tweets', {
      id: { type: DataTypes.INTEGER, allowNull: false, autoIncrement: true, primaryKey: true },
      userId: { type: DataTypes.INTEGER, allowNull: false },
      content: { type: DataTypes.STRING(300), allowNull: false },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
    })
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.dropTable('tweets');
  }
};

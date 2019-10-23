'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('MotoRents', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      MotoId: {
        type: Sequelize.INTEGER
      },
      AccountId: {
        type: Sequelize.INTEGER
      },
      start: {
        type: Sequelize.DATEONLY
      },
      finish: {
        type: Sequelize.DATEONLY
      },
      status: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('MotoRents');
  }
};
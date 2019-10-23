'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Accounts', 'password', Sequelize.STRING)
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.deleteColumn('Accounts', 'password')
  }
};

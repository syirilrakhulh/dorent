'use strict';
module.exports = (sequelize, DataTypes) => {
  class Account extends sequelize.Sequelize.Model{}
  Account.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    address: DataTypes.STRING,
    phone: DataTypes.STRING,
    username: DataTypes.STRING,
    role: DataTypes.STRING,
    balance: DataTypes.STRING
  }, {sequelize, modelName: 'Account'});

  Account.associate = function(models) {
    // Account.hasMany(models.MotoRent)
    Account.belongsToMany(models.Moto, {through: models.MotoRent})
  };
  return Account;
};
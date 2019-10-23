'use strict';
module.exports = (sequelize, DataTypes) => {
  class Account extends sequelize.Sequelize.Model {
    topup(nominal) {
      this.balance += nominal
    }
  }
  Account.init({
    firstName: {
      type: DataTypes.STRING,

    },
    lastName: {
      type: DataTypes.STRING,

    },
    address: {
      type: DataTypes.STRING,

    },
    phone: {
      type: DataTypes.STRING,

    },
    username: {
      type: DataTypes.STRING,
      unique: {
        msg: 'Username is available'
      }
    },
    role: DataTypes.STRING,

    balance: DataTypes.INTEGER,

    password: {
      type: DataTypes.STRING
    }
  }, { sequelize, modelName: 'Account' });

  Account.associate = function (models) {
    // Account.hasMany(models.MotoRent)
    Account.belongsToMany(models.Moto, { through: models.MotoRent })
  };
  return Account;
};
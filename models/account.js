'use strict';
const bcrypt = require('../helpers/hashPassword')
module.exports = (sequelize, DataTypes) => {
  class Account extends sequelize.Sequelize.Model {
    topup(nominal) {
      this.balance += nominal
    }
  }
  Account.init({
    firstName: {
      type: DataTypes.STRING,
      validate : {
        notEmpty : {
          msg : 'Firstname can\'t be empty'
        }
      }
    },

    lastName: {
      type: DataTypes.STRING,
    },

    address: {
      type: DataTypes.STRING,
      validate : {
        notEmpty : {
          msg : 'Address can\'t be empty'
        },
        len : {
          args : [0, 100],
          msg : "Maximal letter of 100"
        }
      }
    },
    
    phone: {
      type: DataTypes.STRING,
      len : {
        args : [6, 16],
        msg : "Please Insert Phone Number"
      }
    },
    
    username: {
      type: DataTypes.STRING,
      validate : {
        notEmpty : {
          msg : 'Username can\'t be empty'
        }
      }
    },

    role: DataTypes.STRING,
    balance: DataTypes.INTEGER,
    password: {
      type: DataTypes.STRING,
      validate : {
        notEmpty : {
          msg : 'Password can\'t be empty'
        }
      }
    }

  }, { 
    hooks: {
      beforeCreate: function(user, options){
          user.setDataValue('password', bcrypt.encrypt(user.password));
      }
  }, sequelize, modelName: 'Account'});

  Account.associate = function (models) {
    // Account.hasMany(models.MotoRent)
    Account.belongsToMany(models.Moto, { through: models.MotoRent })
  };
  return Account;
};
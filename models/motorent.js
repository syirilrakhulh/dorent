'use strict';
module.exports = (sequelize, DataTypes) => {
  class MotoRent extends sequelize.Sequelize.Model{}
  MotoRent.init({
    MotoId: DataTypes.INTEGER,
    AccountId: DataTypes.INTEGER,
    start: DataTypes.DATEONLY,
    finish: DataTypes.DATEONLY,
    status: DataTypes.STRING,
    price: DataTypes.NUMBER
  }, {sequelize, modelName: 'MotoRent'});

  MotoRent.associate = function(models) {

  };
  return MotoRent;
};
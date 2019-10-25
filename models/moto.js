'use strict';
module.exports = (sequelize, DataTypes) => {
  class Moto extends sequelize.Sequelize.Model{}
  Moto.init({
    type: DataTypes.STRING,
    category: DataTypes.STRING,
    price: DataTypes.INTEGER,
    status: DataTypes.STRING,
    quota: DataTypes.STRING
  }, {sequelize, modelName: 'Moto'});

  Moto.associate = function(models) {
    // Moto.hasMany(models.MotoRent)
    Moto.belongsToMany(models.Account, {through: models.MotoRent})
  };
  return Moto;
};
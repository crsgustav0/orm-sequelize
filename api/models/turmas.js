'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Turmas extends Model {
    /*Estabele uma conexão entre bancos, relacionamento */
    static associate = function(models) {
      Turmas.hasMany(models.Matriculas)
      }
  };
  Turmas.init({
    data_incio: DataTypes.DATEONLY
  }, {
    sequelize,
    modelName: 'Turmas',
  });
  return Turmas;
};
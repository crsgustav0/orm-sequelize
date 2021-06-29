'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Niveis extends Model {
    /*Estabele uma conexão entre bancos, relacionamento */
    static associate = function(models) {
    Niveis.hasMany(models.Turmas)
    } 
  };
  Niveis.init({
    desc_nivel: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Niveis',
  });
  return Niveis;
};
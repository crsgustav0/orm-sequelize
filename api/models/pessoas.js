'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pessoas extends Model {
    static associate(models) {

  /*Estabele uma conexão entre bancos, relacionamento */
  Pessoas.associate = function(models) {
  
  Pessoas.hasMany(models.Turmas)
  Pessoas.hasMany(models.Matriculas)

  };

  }}

  Pessoas.init({
    nome: DataTypes.STRING,
    ativo: DataTypes.BOOLEAN,
    email: DataTypes.STRING,
    role: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Pessoas',
  });
   return Pessoas;
};
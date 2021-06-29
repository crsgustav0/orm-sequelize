'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pessoas extends Model {
    static associatse(models) {

  /*Estabele uma conexão entre bancos, relacionamento */
  Pessoas.associate = function(models) {
  Pessoas.hasMany(models.Turmas, {
    /*Nome escolhido para criação associação entre tabelas*/
    foreingKey: 'docente_id' 
  })

  Pessoas.hasMany(models.Matriculas, {
    /*Nome escolhido para criação associação entre tabelas*/
    foreingKey: 'estudante_id'
  })

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
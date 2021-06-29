'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Matriculas extends Model {
    
    /*Estabele uma conexão entre bancos, relacionamento */
    static associate(models) {
    
    /*Define tabela pertecente */
    Matriculas.belongsTo(models.Pessoas, {
    /*Nome escolhido para criação associação entre tabelas*/
      foreingKey: 'estudante_id'
    })
    Matriculas.belongsTo(models.Turmas, {
    /*Nome escolhido para criação associação entre tabelas*/
      foreingKey: 'nivel_id'
    })
  
  }};

  Matriculas.init({
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Matriculas',
  });
  return Matriculas;
};
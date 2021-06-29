'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Turmas extends Model {
    
    /*Estabele uma conexão entre bancos, relacionamento */
    static associate = function(models) {
      Turmas.hasMany(models.Matriculas, {
    /*Nome escolhido para criação associação entre tabelas*/
    foreingKey: 'turma_id'
  })

  /*Define tabela pertecente */
  Turmas.belongsTo(models.Pessoas);
  Turmas.belongsTo(models.Niveis, {
    /*Nome escolhido para criação associação entre tabelas*/
    foreingKey: 'nivel_id'
  })
      
  }};

  Turmas.init({
    data_incio: DataTypes.DATEONLY
  }, {
    sequelize,
    modelName: 'Turmas',
  });
  return Turmas;
};
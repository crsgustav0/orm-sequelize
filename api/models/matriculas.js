"use strict";
module.exports = (sequelize, DataTypes) => {
  const Matriculas = sequelize.define(
    "Matriculas",
    {
      status: DataTypes.STRING,
    },
    { paranoid: true }
  );
  /*Estabele uma conexão entre bancos, relacionamento */
  Matriculas.associate = function (models) {
    /*Define tabela pertecente */
    Matriculas.belongsTo(models.Pessoas, {
      /*Nome escolhido para criação associação entre tabelas*/
      foreignKey: "estudante_id",
    });
    /*Define tabela pertecente */
    Matriculas.belongsTo(models.Turmas, {
      /*Nome escolhido para criação associação entre tabelas*/
      foreignKey: "turma_id",
    });
  };

  return Matriculas;
};

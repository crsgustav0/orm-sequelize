"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  const Turmas = sequelize.define(
    "Turmas",
    {
      data_inicio: DataTypes.DATEONLY,
    },
    { paranoid: true }
  );
  /*Estabele uma conexão entre bancos, relacionamento */
  Turmas.associate = function (models) {
    /*Nome escolhido para criação associação entre tabelas*/
    Turmas.hasMany(models.Matriculas, {
      foreingKey: "turma_id",
    });
    /*Define tabela pertecente */
    Turmas.belongsTo(models.Pessoas, {
      foreingKey: "docente_id",
    });
    /*Define tabela pertecente */
    Turmas.belongsTo(models.Niveis, {
      foreingKey: "nivel_id",
    });
  };

  return Turmas;
};

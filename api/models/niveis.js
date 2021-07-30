"use strict";
module.exports = (sequelize, DataTypes) => {
  const Niveis = sequelize.define(
    "Niveis",
    {
      descr_nivel: DataTypes.STRING,
    },
    { paranoid: true }
  );
  /*Estabele uma conexão entre bancos, relacionamento */
  Niveis.associate = function (models) {
    Niveis.hasMany(models.Turmas, {
      /*Nome escolhido para criação associação entre tabelas*/
      foreignKey: "nivel_id",
    });
  };

  return Niveis;
};

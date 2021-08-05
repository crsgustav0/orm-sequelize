"use strict";
module.exports = (sequelize, DataTypes) => {
    const Pessoas = sequelize.define(
        "Pessoas", {
            nome: DataTypes.STRING,
            ativo: DataTypes.BOOLEAN,
            email: DataTypes.STRING,
            nome: DataTypes.STRING,
        }, { paranoid: true }
    );
    /*Estabele uma conexão entre bancos, relacionamento */
    Pessoas.associate = function(models) {
        Pessoas.hasMany(models.Turmas, {
            /*Nome escolhido para criação associação entre tabelas*/

            foreignKey: "docente_id",
        });
        /*Estabele uma conexão entre bancos, relacionamento */
        Pessoas.hasMany(models.Matriculas, {
            /*Nome escolhido para criação associação entre tabelas*/
            foreignKey: "estudante_id",
        });
    };
    return Pessoas;
};
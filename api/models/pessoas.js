"use strict";
module.exports = (sequelize, DataTypes) => {
    const Pessoas = sequelize.define(
        "Pessoas", {
            nome: DataTypes.STRING,
            ativo: DataTypes.BOOLEAN,
            email: DataTypes.STRING,
            nome: DataTypes.STRING,
        }, {
            paranoid: true,
            /*Definiçao de escopo padrão*/
            defaultScope: {
                /*Passando via parâmetro o campo que será 
                usado como referễncia para consultar registros*/
                where: { ativo: true }
            },

            /*Definiçao de escopo alternativo*/
            scopes: {
                /*Passando via parâmetro o campo que será 
                  usado como referễncia para consultar registros*/
                todos: {
                    where: {}
                }
            }
        }
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
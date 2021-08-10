"use strict";
module.exports = (sequelize, DataTypes) => {
    const Pessoas = sequelize.define(
        "Pessoas", {
            /*Passa via objeto as especificações 
                  da criação do objeto*/
            nome: {
                dataTypes: DataTypes.STRING,
                /*Passa via objeto as validações,
                         função criada para validar o campo onde, 
                         em caso de erro retorna uma mensagem*/
                validate: {
                    validarNomePessoa: function(dados) {
                        if (dados.length < 3)
                            throw new Error("O campo nome deve ter mais de 3 caracteres");
                    },
                },
            },
            ativo: DataTypes.BOOLEAN,
            /*Passa via objeto as especificações 
                  da criação do objeto*/
            email: {
                dataType: DataTypes.STRING,
                /*Passa via objeto as 
                        validações do campo*/
                validate: {
                    /*Passa via objeto as 
                              especificações utilizadas 
                              para validaçõões do campo*/
                    isEmail: {
                        args: true,
                        msg: "Dados tipo e-mail inválidos",
                    },
                },
            },
            nome: DataTypes.STRING,
        }, {
            paranoid: true,
            /*Definiçao de escopo padrão*/
            defaultScope: {
                /*Passando via parâmetro o campo que será 
                        usado como referễncia para consultar registros*/
            },

            /*Definiçao de escopo alternativo*/
            scopes: {
                /*Passando via parâmetro o campo que será 
                          usado como referễncia para consultar registros*/
                todos: {
                    where: {},
                },
            },
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
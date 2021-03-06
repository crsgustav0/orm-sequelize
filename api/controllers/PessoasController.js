/*Importa automaticamente os arquivos da pasta*/
const { json, Sequelize } = require("sequelize/types");
const { PessoasServices } = require("../services");
const pessoasServices = new PessoasServices()

/* static - É possível chamar a função, sem instânciar
    o objeto - new PessoaController...
   
    async - Definção de espera enquanto executa comandos 
    internos
/*  


/*Usada para deefnição de métodos usadaas pela classe */
class PessoasControler {
    /*Busca de todos os registros gravados no BD,
                  passando via parâmetro o escopo requerido 'todos'
                  */
    static async buscarPessoas(req, res) {
        try {
            const consultaPessoas = await //Enquanto executa
            pessoasServices.buscarRegistros(); /* Método Sequelize para busca de registros */

            /*Retorna a consulta do banco no formato JSON */
            return res.status(200).json(consultaPessoas);
        } catch (error) {
            /*Em caso de erro, retorna o cod. erro (500) e sua mensagem
                                                      em formato JSON */
            return res.status(500).json(error.message);
        }
    }

    /*Busca de todos os 
                      registros gravados no BD */
    static async buscarPessoasAtivas(req, res) {
        try {
            const pessoasAtivas = await //Enquanto executa
            pessoasServices.buscarRegistrosAtivos(); /* Método Sequelize para busca de registros */

            /*Retorna a consulta do banco no formato JSON */
            return res.status(200).json(pessoasAtivas);
        } catch (error) {
            /*Em caso de erro, retorna o cod. erro (500) e sua mensagem
                                                      em formato JSON */
            return res.status(500).json(error.message);
        }
    }

    /*Busca de registros gravados no BD 
                  passando via parâmetro seu ID */
    static async buscarPessoasByID(req, res) {
        const { id } = req.params;

        try {
            const pessoaID = await database.Pessoas.findOne(
                /* Método Sequelize para busca de registros 
                passando objetos via parâmetro seu ID.*/
                {
                    where: {
                        id: Number(id),
                    },
                }
            );

            /*Retorna a consulta do banco no formato JSON */
            return res.status(200).json(pessoaID);
        } catch (error) {
            /*Em caso de erro, retorna o cod. erro (500) e sua mensagem
             em formato JSON */
            return res.status(500).json(error.message);
        }
    }

    /*Gravação de registros no  BD 
                  passando via corpo JSON seu conteúdo*/
    static async criarPessoas(req, res) {
        const novaPessoa = req.body;

        try {
            /* Método Sequelize para criação de registros 
             passando /o conteudo JSON via parâmetro*/
            const criadaPessoa = await database.Pessoas.create(novaPessoa);

            /*Retorna a gravação do banco em formato JSON */
            return res.status(200).json(criadaPessoa);
        } catch (error) {
            /*Em caso de erro, retorna o cod. erro (500) e sua mensagem
                                                      em formato JSON */
            return res.status(500).json(error.message);
        }
    }

    /*Atualização de registros no BD 
                  passando via corpo JSON seu conteúdo*/
    static async atualizarPessoasByID(req, res) {
        const atualizaPessoa = req.body;
        const { id } = req.params;

        try {
            /* Método Sequelize para atualização de registros 
                                                             passando objetos via parâmetro o corpo do
                                                             JSON o conteúdo a ser atualizado e seu ID.*/
            const pessoaID = await database.Pessoas.update(atualizaPessoa, {
                where: {
                    id: Number(id),
                },
            });

            /* Método Sequelize para busca de registros 
                                                             passando objetos via parâmetro seu ID.*/
            const pessoaAtualizada = await database.Pessoas.findOne({
                where: {
                    id: Number(id),
                },
            });

            /*Retorna a consulta do banco no formato JSON */
            return res.status(200).json(pessoaAtualizada);
        } catch (error) {
            /*Em caso de erro, retorna o cod. erro (500) e sua mensagem
                                                      em formato JSON */
            return res.status(500).json(error.message);
        }
    }

    /*Deleção de registros no BD 
                  passando via corpo JSON seu conteúdo*/
    static async deletarPessoasByID(req, res) {
        const { id } = req.params;

        try {
            /* Método Sequelize para deleção de registros 
                                                         passando objetos via parâmetro seu ID.*/
            await database.Pessoas.destroy({
                where: {
                    id: Number(id),
                },
            });

            return res.status(200).json({ mensage: `Registro ID ${id} deletado!` });
        } catch (error) {
            /*Em caso de erro, retorna o cod. erro (500) e sua mensagem
                                                      em formato JSON */
            res.status(500).json(error.message);
        }
    }

    /*Restaura o registro apagado no BD 
                  passando via parâmetro o seu ID
                  */

    static async restaurarPessoa(req, res) {
        const { id } = req.params;

        try {
            /* Método Sequelize para restaurar registros passando objetos 
                                                      via parâmetro seu ID. */
            await database.Pessoas.restore({ where: { id: Number(id) } });

            /*Retorna a consulta do banco no formato JSON */
            return res.status(200).json({ mensage: `id ${id} restaurado!` });
        } catch (error) {
            /*Em caso de erro, retorna o cod. Erro (500) e sua mensagem
                                                      no formato JSON*/
            return res, status(500), json(error.mensage);
        }
    }

    /*Busca de registros gravados no BD 
                  passando via parâmetro seu ID 
                  http://localhost:3000/pessoas/:estudanteID/matricula/:matriculaId
                  */
    static async buscarMatriculaPessoasByID(req, res) {
        const { estudanteId, matriculaId } = req.params;

        try {
            const matriculaPessoaID = await database.Matriculas.findOne(
                /* Método Sequelize para busca de registros 
                                                                            passando objetos via parâmetro seu ID.*/
                {
                    where: {
                        id: Number(matriculaId),
                        estudanteId: Number(estudanteId),
                    },
                }
            );

            /*Retorna a consulta do banco no formato JSON */
            return res.status(200).json(matriculaPessoaID);
        } catch (error) {
            /*Em caso de erro, retorna o cod. erro (500) e sua mensagem
                                                      em formato JSON */
            return res.status(500).json(error.message);
        }
    }

    /*Gravação de registros no  BD 
                  passando via corpo JSON seu conteúdo
                  http://localhost:3000/pessoas/:estudanteID/:matriculaId
                  */
    static async criarMatricula(req, res) {
        const { estudanteId } = req.params;

        const novaMatricula = {
            ...req.body,
            estudanteId: Number(estudanteId),
        };

        try {
            /* Método Sequelize para criação de registros 
                                                              passando /o conteudo JSON via parâmetro*/
            const criadaMatricula = await database.Matriculas.create(novaMatricula);

            /*Retorna a gravação do banco em formato JSON */
            return res.status(200).json(criadaMatricula);
        } catch (error) {
            /*Em caso de erro, retorna o cod. erro (500) e sua mensagem
                                                      em formato JSON */
            return res.status(500).json(error.message);
        }
    }

    /*Atualização de registros no BD 
                  passando via corpo JSON seu conteúdo*/
    static async atualizarMatriculaByID(req, res) {
        const { estudanteId, matriculaId } = req.params;

        const novaMatricula = req.body;

        try {
            /* Método Sequelize para atualização de registros 
                                                             passando objetos via parâmetro o corpo do
                                                             JSON o conteúdo a ser atualizado e seu ID.*/
            const matriculaId = await database.Matriculas.update(atualizaPessoa, {
                where: {
                    id: Number(matriculaId),
                    estudante_id: Number(estudanteId),
                },
            });

            /* Método Sequelize para busca de registros 
                                                             passando objetos via parâmetro seu ID.*/
            const matriculaAtualizada = await database.Matriculas.findOne({
                where: {
                    id: Number(matriculaId),
                },
            });

            /*Retorna a consulta do banco no formato JSON */
            return res.status(200).json(matriculaAtualizada);
        } catch (error) {
            /*Em caso de erro, retorna o cod. erro (500) e sua mensagem
                                                      em formato JSON */
            return res.status(500).json(error.message);
        }
    }

    /*Deleção de registros no BD 
                  passando via corpo JSON seu conteúdo*/
    static async deletarMatriculaByID(req, res) {
        const { estudanteId, matriculaId } = req.params;

        try {
            /* Método Sequelize para deleção de registros 
                                                         passando objetos via parâmetro seu ID.*/
            await database.Matriculas.destroy({
                where: {
                    id: Number(matriculaId),
                },
            });

            return res
                .status(200)
                .json({ mensage: `Registro ID ${matriculaId} deletado!` });
        } catch (error) {
            /*Em caso de erro, retorna o cod. erro (500) e sua mensagem
                                                      em formato JSON */
            res.status(500).json(error.message);
        }
    }

    /*Busca de registros no BD 
                  passando via corpo JSON o 
                  ID como parâmetro */
    static async buscarMatriculas(req, res) {
        const { estudanteId } = req.params;

        try {
            /* Método Sequelize para deleção de registros 
                                                         passando objetos via parâmetro seu ID.*/
            const pessoa = await database.Pessoas.findOne({
                where: { id: Number(estudante_id) },
            });
            const matriculas = await pessoa.getAulasMatriculadas();
            return res.status(200).json(matriculas);
        } catch (error) {
            /*Em caso de erro, retorna o cod. erro (500) e sua mensagem
                                                      em formato JSON */
            res.status(500).json(error.message);
        }
    }

    /*Busca de registros no BD 
                  passando via corpo JSON a Turma
                  como parâmetro */
    static async buscarMatriculasByTurma(req, res) {
        const { turmaId } = req.params;

        try {
            /* Método Sequelize para busca e contagem de de registros 
                              passando objetos via parâmetro seu ID.*/
            const Turmas = await database.Matriculas.findAndCountAll({
                where: {
                    turma_id: Number(turmaId),
                    status: "confirmado",
                    /*Passagem de parametros opicionais 
                                          limit: 20,
                                          order: [
                                              Especificação da ordem dos registros, passando 
                                              primeiro o campo e a sua formatação sendo:
                                              asc - Ordenados crescente 
                                              dsc - Ordenados decrescente 
                                              ['estudante_id', 'asc']
                                          ]*/
                },
            });
            return res.status(200).json(Turmas);
        } catch (error) {
            /*Em caso de erro, retorna o cod. erro (500) e sua mensagem
                                          em formato JSON */
            return res.status(500).json(error.mensage);
        }
    }

    /*Busca de registros no BD 
                  passando via corpo JSON a Turma
                  como parâmetro */
    static async buscarTurmasLotadas(req, res) {
        const { turmaLotacao } = 2;

        try {
            /* Método Sequelize para busca e contagem de de registros 
                              passando objetos via parâmetro seu ID.*/
            const TurmasLotadas = await database.Matriculas.findAndCountAll({
                where: {
                    limit: 20,
                    status: "confirmado",
                },
                /*
                                attributes - Especifica o campo que será utilizado
                                group - Especifica o campo que será utilizado 
                                para agrupamento, 
                                
                                exemplo:
                                    Agrupe registros de acordo com o campo passado 
                                */
                attributes: ["turma_id"],
                group: ["turma_id"],
                /*Especifica via propriedade 'having' comandos SQL
                                que serão usado para a contagem de registros */
                having: Sequelize.literal(` count(turma_id >= ${turmaLotacao}) `),
            });
            return res.status(200).json(TurmasLotadas.count);
        } catch (error) {
            /*Em caso de erro, retorna o cod. erro (500) e sua mensagem
                                          em formato JSON */
            return res.status(500).json(error.mensage);
        }
    }

    /*Busca de registros no BD 
                  passando via corpo JSON a Turma
                  como parâmetro */
    static async cancelarPessoa(req, res) {
        const { estudante_id } = req.params;

        try {
            /*Operações no banco via transações são 
                  gerenciadas a partir do registros do banco,
                  em caso de erro, restaura os registros*/
            database.sequelize.transaction(async(transacao) => {
                /* Método Sequelize para atualização de registros, não recebe os dados 
                        a serem atualizados por ser uma atualização definida de campos*/
                await database.Pessoas.update(
                    /*Passa via parâmetros os campos a serem atualizados
                              campo 'ativo': false
                              campo chave: estudante_id
                              */
                    { ativo: false }, { where: { id: Number(estudante_id) } }, { transaction: transacao }
                );

                await database.Matriculas.update(
                    /*Passa via parâmetros os campos a serem atualizados
                              campo 'ativo': false
                              campo chave: estudante_id
                              */
                    { status: "cancelado" }, {
                        where:
                        /*Atualiza o campo utilizado no relacionamento entre
                                  as tabelas Pessoas e Matriculas*/
                        { estudante_id: Number(estudante_id) },
                    }, { transaction: transacao }
                );

                return res
                    .status(200)
                    .json({
                        mensage: `Matriculas ref. estudante ${estudante_id} canceladas!`,
                    });
            });
        } catch (error) {
            /*Em caso de erro, retorna o cod. erro (500) e sua mensagem
                                          em formato JSON */
            return res.status(500).json(error.mensage);
        }
    }
}

/*Torna a classe acessível ao restante da aplicação */
module.exports = PessoasControler;
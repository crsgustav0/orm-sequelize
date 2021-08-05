//Importa automaticamente os arquivos da pasta
const database = require('../models')

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
            database.Pessoas.scope('todos').findAll() /* Método Sequelize para busca de registros */

            /*Retorna a consulta do banco no formato JSON */
            return res.status(200).json(consultaPessoas)

        } catch (error) {

            /*Em caso de erro, retorna o cod. erro (500) e sua mensagem
            em formato JSON */
            return res.status(500).json(error.message)
        }
    }

    /*Busca de todos os 
        registros gravados no BD */
    static async buscarPessoasAtivas(req, res) {
        try {
            const pessoasAtivas = await //Enquanto executa
            database.Pessoas.findAll() /* Método Sequelize para busca de registros */

            /*Retorna a consulta do banco no formato JSON */
            return res.status(200).json(pessoasAtivas)

        } catch (error) {

            /*Em caso de erro, retorna o cod. erro (500) e sua mensagem
            em formato JSON */
            return res.status(500).json(error.message)
        }
    }

    /*Busca de registros gravados no BD 
    passando via parâmetro seu ID */
    static async buscarPessoasByID(req, res) {
        const { id } = req.params

        try {
            const pessoaID = await database.Pessoas.findOne(
                /* Método Sequelize para busca de registros 
                    passando objetos via parâmetro seu ID.*/
                {
                    where: {
                        id: Number(id)
                    }
                })

            /*Retorna a consulta do banco no formato JSON */
            return res.status(200).json(pessoaID)

        } catch (error) {

            /*Em caso de erro, retorna o cod. erro (500) e sua mensagem
            em formato JSON */
            return res.status(500).json(error.message)
        }
    }

    /*Gravação de registros no  BD 
    passando via corpo JSON seu conteúdo*/
    static async criarPessoas(req, res) {
        const novaPessoa = req.body

        try {
            /* Método Sequelize para criação de registros 
                    passando /o conteudo JSON via parâmetro*/
            const criadaPessoa = await database.Pessoas.create(novaPessoa)

            /*Retorna a gravação do banco em formato JSON */
            return res.status(200).json(criadaPessoa)

        } catch (error) {

            /*Em caso de erro, retorna o cod. erro (500) e sua mensagem
            em formato JSON */
            return res.status(500).json(error.message)
        }

    }

    /*Atualização de registros no BD 
    passando via corpo JSON seu conteúdo*/
    static async atualizarPessoasByID(req, res) {
        const atualizaPessoa = req.body
        const { id } = req.params

        try {
            /* Método Sequelize para atualização de registros 
                   passando objetos via parâmetro o corpo do
                   JSON o conteúdo a ser atualizado e seu ID.*/
            const pessoaID = await database.Pessoas.update(atualizaPessoa, {
                where: {
                    id: Number(id)
                }
            })

            /* Método Sequelize para busca de registros 
                   passando objetos via parâmetro seu ID.*/
            const pessoaAtualizada = await database.Pessoas.findOne({
                where: {
                    id: Number(id)
                }
            })

            /*Retorna a consulta do banco no formato JSON */
            return res.status(200).json(pessoaAtualizada)

        } catch (error) {
            /*Em caso de erro, retorna o cod. erro (500) e sua mensagem
            em formato JSON */
            return res.status(500).json(error.message)
        }
    }

    /*Deleção de registros no BD 
    passando via corpo JSON seu conteúdo*/
    static async deletarPessoasByID(req, res) {
        const { id } = req.params

        try {

            /* Método Sequelize para deleção de registros 
               passando objetos via parâmetro seu ID.*/
            await database.Pessoas.destroy({
                where: {
                    id: Number(id)
                }
            })

            return res.status(200).json({ mensage: `Registro ID ${id} deletado!` })

        } catch (error) {
            /*Em caso de erro, retorna o cod. erro (500) e sua mensagem
            em formato JSON */
            res.status(500).json(error.message)
        }
    }

    /*Restaura o registro apagado no BD 
    passando via parâmetro o seu ID
    */

    static async restaurarPessoa(req, res) {
        const { id } = req.params

        try {
            /* Método Sequelize para restaurar registros passando objetos 
            via parâmetro seu ID. */
            await database.Pessoas.restore({ where: { id: Number(id) } })

            /*Retorna a consulta do banco no formato JSON */
            return res.status(200).json({ mensage: `id ${id} restaurado!` })

        } catch (error) {

            /*Em caso de erro, retorna o cod. Erro (500) e sua mensagem
            no formato JSON*/
            return res, status(500), json(error.mensage)
        }
    }

    /*Busca de registros gravados no BD 
    passando via parâmetro seu ID 
    http://localhost:3000/pessoas/:estudanteID/matricula/:matriculaId
    */
    static async buscarMatriculaPessoasByID(req, res) {
        const { estudanteId, matriculaId } = req.params

        try {
            const matriculaPessoaID = await database.Matriculas.findOne(
                /* Método Sequelize para busca de registros 
                    passando objetos via parâmetro seu ID.*/
                {
                    where: {
                        id: Number(matriculaId),
                        estudanteId: Number(estudanteId)
                    }
                })

            /*Retorna a consulta do banco no formato JSON */
            return res.status(200).json(matriculaPessoaID)

        } catch (error) {

            /*Em caso de erro, retorna o cod. erro (500) e sua mensagem
            em formato JSON */
            return res.status(500).json(error.message)
        }
    }


    /*Gravação de registros no  BD 
    passando via corpo JSON seu conteúdo
    http://localhost:3000/pessoas/:estudanteID/:matriculaId
    */
    static async criarMatricula(req, res) {
        const { estudanteId } = req.params

        const novaMatricula = {
            ...req.body,
            estudanteId: Number(estudanteId)
        }

        try {
            /* Método Sequelize para criação de registros 
                    passando /o conteudo JSON via parâmetro*/
            const criadaMatricula = await database.Matriculas.create(novaMatricula)

            /*Retorna a gravação do banco em formato JSON */
            return res.status(200).json(criadaMatricula)

        } catch (error) {

            /*Em caso de erro, retorna o cod. erro (500) e sua mensagem
            em formato JSON */
            return res.status(500).json(error.message)
        }

    }

    /*Atualização de registros no BD 
    passando via corpo JSON seu conteúdo*/
    static async atualizarMatriculaByID(req, res) {
        const { estudanteId, matriculaId } = req.params

        const novaMatricula = req.body

        try {
            /* Método Sequelize para atualização de registros 
                   passando objetos via parâmetro o corpo do
                   JSON o conteúdo a ser atualizado e seu ID.*/
            const matriculaId = await database.Matriculas.update(atualizaPessoa, {
                where: {
                    id: Number(matriculaId),
                    estudante_id: Number(estudanteId)
                }
            })

            /* Método Sequelize para busca de registros 
                   passando objetos via parâmetro seu ID.*/
            const matriculaAtualizada = await database.Matriculas.findOne({
                where: {
                    id: Number(matriculaId)
                }
            })

            /*Retorna a consulta do banco no formato JSON */
            return res.status(200).json(matriculaAtualizada)

        } catch (error) {
            /*Em caso de erro, retorna o cod. erro (500) e sua mensagem
            em formato JSON */
            return res.status(500).json(error.message)
        }
    }

    /*Deleção de registros no BD 
    passando via corpo JSON seu conteúdo*/
    static async deletarMatriculaByID(req, res) {
        const { estudanteId, matriculaId } = req.params

        try {

            /* Método Sequelize para deleção de registros 
               passando objetos via parâmetro seu ID.*/
            await database.Matriculas.destroy({
                where: {
                    id: Number(matriculaId)
                }
            })

            return res.status(200).json({ mensage: `Registro ID ${matriculaId} deletado!` })

        } catch (error) {
            /*Em caso de erro, retorna o cod. erro (500) e sua mensagem
            em formato JSON */
            res.status(500).json(error.message)
        }
    }

}

/*Torna a classe acessível ao restante da aplicação */
module.exports = PessoasControler
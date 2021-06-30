//Importa automaticamente os arquivos da pasta
const database = require('../models')

/* static - É possível chamar a função, sem instânciar
    o objeto - new PessoaController...
   
    async - Definção de espera enquanto executa comandos 
    internos
/*  


/*Usada para deefnição de métodos usadaas pela classe */
class NivelController {
   
    /*Busca de todos os 
    registros gravados no BD */
    static async buscarNiveis(req,res){
        try{
            const consultaNiveis = await //Enquanto executa
            database.Niveis.findAll() /* Método Sequelize para busca de registros */
    
            /*Retorna a consulta do banco no formato JSON */
            return res.status(200).json(consultaNiveis)

        }catch(error){

            /*Em caso de erro, retorna o cod. erro (500) e sua mensagem
            em formato JSON */
            return res.status(500).json(error.message)    
        }
    }

    /*Busca de registros gravados no BD 
    passando via parâmetro seu ID */
    static async buscarNiveisByID(req,res){
        const { id } = req.params

        try{
            const niveisID = await database.Niveis.findOne( 
                /* Método Sequelize para busca de registros 
                    passando objetos via parâmetro seu ID.*/
                {
                    where: {
                        id: Number(id)
                    }
                })
                
                /*Retorna a consulta do banco no formato JSON */
                return res.status(200).json(niveisID)
            
        }catch (error){

            /*Em caso de erro, retorna o cod. erro (500) e sua mensagem
            em formato JSON */
            return res.status(500).json(error.message)
        }
    }

     /*Gravação de registros no  BD 
    passando via corpo JSON seu conteúdo*/
    static async criarNivel(req,res) {
        const novaNivel = req.body

        try{
            /* Método Sequelize para criação de registros 
                    passando /o conteudo JSON via parâmetro*/
            const criadaNivel = await database.Niveis.create(novaNivel)

            /*Retorna a gravação do banco em formato JSON */
            return res.status(200).json(criadaNivel)

        }catch (error){

            /*Em caso de erro, retorna o cod. erro (500) e sua mensagem
            em formato JSON */
            return res.status(500).json(error.message)
        }

    }

     /*Atualização de registros no BD 
    passando via corpo JSON seu conteúdo*/
    static async atualizarNivelByID(req,res) {
        const atualizaNivel = req.body
        const { id } = req.params

        try{
             /* Método Sequelize para atualização de registros 
                    passando objetos via parâmetro o corpo do
                    JSON o conteúdo a ser atualizado e seu ID.*/
            const pessoaID = await database.Niveis.update(atualizaNivel,
                {where: {
                        id: Number(id)
                    }
                })

                 /* Método Sequelize para busca de registros 
                        passando objetos via parâmetro seu ID.*/
                const NivelAtualizada = await database.Nivel.findOne( 
                   {
                        where: {
                            id: Number(id)
                        }
                    })
                    
                    /*Retorna a consulta do banco no formato JSON */
                    return res.status(200).json(NivelAtualizada)
                         
        }catch (error){
            /*Em caso de erro, retorna o cod. erro (500) e sua mensagem
            em formato JSON */
            return res.status(500).json(error.message)
        }
    }

    /*Deleção de registros no BD 
    passando via corpo JSON seu conteúdo*/
    static async deletarNivelByID(req,res) {
        const { id } = req.params

        try{

             /* Método Sequelize para deleção de registros 
                passando objetos via parâmetro seu ID.*/
            await database.Nivel.destroy({
                where: {
                    id: Number(id)
                }
            })

            return res.status(200).json({mensage: `Registro ID ${id} deletado!`})

        }catch (error){
            /*Em caso de erro, retorna o cod. erro (500) e sua mensagem
            em formato JSON */
            res.status(500).json(error.message)
        }
    }

}

/*Torna a classe acessível ao restante da aplicação */
module.exports = NivelController
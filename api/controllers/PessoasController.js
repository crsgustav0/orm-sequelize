//Importa automaticamente os arquivos da pasta
const database = require('../models')

/* static - É possível chamar a função, sem instânciar
    o objeto - new PessoaController...
   
    async - Definção de espera enquanto executa comandos 
    internos
/*  


/*Usada para deefnição de métodos usadaas pela classe */
class PessoasControler {
   
    /*Busca de todos os 
    registros gravados no BD */
    static async buscarPessoas(req,res){
        try{
            const consultaPessoas = await //Enquanto executa
            database.Pessoas.findAll() /* Método Sequelize para busca de registros */
    
            /*Retorna a consulta do banco no formato JSON */
            return res.status(200).json(consultaPessoas)

        }catch(error){

            /*Em caso de erro, retorna o cod. erro (500) e sua mensagem
            em formato JSON */
            return res.status(500).json(error.message)    
        }
    }

    /*Busca de registros gravados no BD 
    passando via parâmetro seu ID */
    static async buscarPessoasByID(req,res){
        const { id } = req.params

        try{
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
            
        }catch (error){

            /*Em caso de erro, retorna o cod. erro (500) e sua mensagem
            em formato JSON */
            return res.status(500).json(error.message)
        }
    }

}

/*Torna a classe acessível ao restante da aplicação */
module.exports = PessoasControler
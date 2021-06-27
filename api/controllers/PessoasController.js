//Importa automaticamente os arquivos da pasta
const database = require('../models')

/* static - É possível chamar a função, sem instânciar
    o objeto - new PessoaController...
   
    async - Definção de espera enquanto executa comandos 
    internos
/*  


/*Usada para deefnição de métodos usadaas pela classe */
class PessoasControler {
   
    /*Usado para busca de todos os 
    registros gravados no BD */
    static async buscarPessoas(req,res){
        try{const consultaPessoas = await //Enquanto executa
            database.Pessoas.findAll() /* Método sequelize para busca de registros */
    
            /*Retorna a consulta do banco no formato JSON */
            return res.status(200).json(consultaPessoas)

        }catch(error){

            /*Em caso de erro, retorno o cód. erro (500) 
            e o erro via mensagem no formato JSON */
            return res.status(500).json(error.message)    
        }
    }
}

/*Torna a classe acessível ao restante da aplicação */
module.exports = PessoasControler
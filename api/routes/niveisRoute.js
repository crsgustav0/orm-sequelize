/*Importação Router a partir do Express */    
const {Router} = require('express')
const NivelController = require('../controllers/NivelController')

const router = Router()

/*Centraliza a execução de funções através do acesso a classe
importado através da Constante 'PessoaController' */

//Requisição GET, busca todos os registros do banco
router.get('/niveis', NivelController.buscarNiveis)

/*Requisição GET, busca de registros do banco 
passando o id como parametro ':id' */
router.get('/niveis/:id', NivelController.buscarNiveisByID)

//Requisição POST, gravação de registros no banco
router.post('/niveis', NivelController.criarNivel)

/*Requisição POST, atualização de registros no banco
passando o ID como parametro ':id' */
router.put('/niveis/:id', NivelController.atualizarNivelByID)

/*Requisição DELETE, deleção de registros no banco
passando o ID como parametro ':id' */
router.delete('/niveis/:id', NivelController.deletarNivelByID)

/*Torna o modulo acessivel a outros diretorios da aplicação*/
module.exports = router


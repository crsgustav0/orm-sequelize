/*Importação Router a partir do Express */    
const {Router} = require('express')
const TurmasController = require('../controllers/TurmasController')

const router = Router()

/*Centraliza a execução de funções através do acesso a classe
importado através da Constante 'PessoaController' */

//Requisição GET, busca todos os registros do banco
router.get('/turmas', TurmasController.buscarTurmas)

/*Requisição GET, busca de registros do banco 
passando o id como parametro ':id' */
router.get('/turmas/:id', TurmasController.buscarTurmasByID)

//Requisição POST, gravação de registros no banco
router.post('/turmas', TurmasController.criarTurmas)

/*Requisição POST, atualização de registros no banco
passando o ID como parametro ':id' */
router.put('/turmas/:id', TurmasController.atualizarTurmasByID)

/*Requisição DELETE, deleção de registros no banco
passando o ID como parametro ':id' */
router.delete('/turmas/:id', TurmasController.deletarTurmasByID)

/*Torna o modulo acessivel a outros diretorios da aplicação*/
module.exports = router


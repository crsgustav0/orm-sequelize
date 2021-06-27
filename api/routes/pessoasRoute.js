/*Importação Router a partir do Express */    
const {Router} = require('express')
const PessoasControler = require('../controllers/PessoasController')

const router = Router()

/*Centraliza a execução de funções através do acesso a classe
importado através da Constante 'PessoaController' */

//Busca todos os registros do banco
router.get('/pessoas', PessoasControler.buscarPessoas)

//Busca registros do banco passando o id como parametro ':id'
router.get('/pessoas/:id', PessoasControler.buscarPessoasByID)

/*Torna o modulo acessivel a outros diretorios da aplicação*/
module.exports = router


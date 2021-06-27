/*Importação Router a partir do Express */    
const {Router} = require('express')
const PessoasControler = require('../controllers/PessoasController')

const router = Router()

/*Centraliza a execução de funções através do acesso a classe
importado através da Constante 'PessoaController' */
router.get('/pessoas', PessoasControler.buscarPessoas)

/*Torna o modulo acessivel a outros diretorios da aplicação*/
module.exports = router


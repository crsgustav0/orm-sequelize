const PessoasControler = require("../controllers/PessoasController");

const router
    /*Centraliza a execução de funções através do acesso a classe
    importado através da Constante 'PessoaController' */

//Requisição GET, busca todos os registros ativos do banco
router.get("/pessoas/todos", PessoasControler.buscarPessoas);

//Requisição GET, busca todos os registros ativos do banco
router.get("/pessoas", PessoasControler.buscarPessoasAtivas);

/*Requisição GET, busca de registros do banco 
passando o id como parametro ':id' */
router.get("/pessoas/:id", PessoasControler.buscarPessoasByID);

/*Requisição GET, busca de registros do banco 
passando o id como parametro ':id' */
router.get(
    "/pessoas/:estudanteId/matricula/:id",
    PessoasControler.buscarMatriculaPessoasByID
);

/*Requisição put, gravação de registros do banco 
passando o id como parametro ':id' */
router.get(
    "/pessoas/:estudanteId/matricula/:id",
    PessoasControler.atualizarMatriculaByID
);

/*Requisição put, gravação de registros do banco 
passando o id como parametro ':id' */
router.get(
    "/pessoas/:estudanteId/matricula/:id",
    PessoasControler.deletarMatriculaByID
);

//Requisição POST, gravação de registros no banco
router.post("/pessoas", PessoasControler.criarPessoas);

//Requisição POST, gravação de registros no banco
router.post(
    "/pessoas/:estudanteID/matricula/:matriculaId",
    PessoasControler.criarMatricula
);

/*Requisição post, restauração de registros no banco 
passando o id como parametro ':id' */
router.post("/pessoas/:id/restaura", PessoasControler.restaurarPessoa);

/*Requisição POST, atualização de registros no banco
passando o ID como parametro ':id' */
router.put("/pessoas/:id", PessoasControler.atualizarPessoasByID);

/*Requisição DELETE, deleção de registros no banco
passando o ID como parametro ':id' */
router.delete("/pessoas/:id", PessoasControler.deletarPessoasByID);

/*Torna o modulo acessivel a outros diretorios da aplicação*/
module.exports = router;
const PessoasControler = require("../controllers/PessoasController");
const router = Router();

/*Centraliza a execução de funções através do acesso a classe
importado através da Constante 'PessoaController' */

router

/*Requisição GET, busca todos os registros ativos do banco*/
    .get("/pessoas/todos", PessoasControler.buscarPessoas)

/*Requisição GET, busca todos os registros ativos do banco*/
.get("/pessoas", PessoasControler.buscarPessoasAtivas)

/*Requisição GET, busca de registros do banco 
passando o id como parametro ':id' */
.get("/pessoas/:id", PessoasControler.buscarPessoasByID)

/*Requisiçao GET, busca de registro do banco 
passando o ID como parâmetro ':id'  */
.get("pessoas/:estudanteId/matricula", PessoasControler.buscarMatriculas)

/*Requisição GET, busca de registros do banco 
passando o id como parametro ':id' e o método a 
ser executado na busca de registros*/
.get("/pessoas/:estudanteId/matricula/:id", PessoasControler.buscarMatriculaPessoasByID)

/*Requisição GET, busca de registros do banco 
passando o id como parametro ':id' e o método a 
ser executado na busca de registros*/
.get("/pessoas/:matricula/:turmasId/confirmadas", PessoasControler.buscarMatriculasByTurma)

/*Requisição GET, busca de registros do banco 
passando o id como parametro ':id' e o método a 
ser executado na busca de registros*/
.get("/pessoas/:matricula/lotada", PessoasControler.buscarTurmasLotadas)

/*Requisição put, gravação de registros do banco 
passando o id como parametro ':id' */
.get("/pessoas/:estudanteId/matricula/:id", PessoasControler.atualizarMatriculaByID)

/*Requisição put, gravação de registros do banco 
passando o id como parametro ':id' */
.get("/pessoas/:estudanteId/matricula/:id", PessoasControler.deletarMatriculaByID)

//Requisição POST, gravação de registros no banco
.post("/pessoas", PessoasControler.criarPessoas)

//Requisição POST, gravação de registros no banco
.post("/pessoas/:estudanteID/matricula/:matriculaId", PessoasControler.criarMatricula)

/*Requisição post, restauração de registros no banco 
passando o id como parametro ':id' */
.post("/pessoas/:id/restaura", PessoasControler.restaurarPessoa)

/*Requisição POST, deleção de registros relacionados entre 
as tabelas Pessoas e Matriculas passando o ID como parametro ':id'*/
.post("/pessoas/estudanteId/cancela", PessoasControler.cancelarPessoa)

/*Requisição POST, atualização de registros no banco
passando o ID como parametro ':id' */
.put("/pessoas/:id", PessoasControler.atualizarPessoasByID)

/*Requisição DELETE, deleção de registros no banco
passando o ID como parametro ':id' */
.delete("/pessoas/:id", PessoasControler.deletarPessoasByID);

/*Torna o modulo acessivel a outros diretorios da aplicação*/
module.exports = router;
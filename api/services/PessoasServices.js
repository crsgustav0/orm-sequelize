/*Importa a classe usada para a centralização de serviços*/
const Services = require("../services/Services");
const database = require('../models')

/*Através da propriedade 'extends' da classe 'Services'
não é necessário criar novamente as operações*/
class PessoasServices extends Services {
    /*Por se tratar de uma classe que trata especificamente as operações 
      chamadas através dos Services, é possível instanciar diretamente o 
      modelo a ser usado*/
    constructor() {
        super("Pessoas");
    }

    /*Métodos especificos do controlador 'Pessoas'*/

    async buscarRegistrosAtivos(where = {}) {
        return database[this.nomeModelo].findAll(
            /*Passa via parametro o filtro de registros se informado, caso 
            nao informado apenas realiza a consulta de registros*/
            { where: {...where } }
        );
    }

    async buscarRegistros(where = {}) {
        return database[this.nomeModelo].scope(
            /*Passa via parametro o esscopo que será utilzado na busca de registros*/
            'todos'
        ).findAll(
            /*Passa via parametro o filtro de registros se informado, caso 
            nao informado apenas realiza a consulta de registros*/
            { where: {...where } }
        );
    }

}

module.exports = PessoasServices;
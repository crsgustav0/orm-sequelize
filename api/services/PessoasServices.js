/*Importa a classe usada para a centralização de serviços*/
const Services = require('../services/Services')


/*Através da propriedade 'extends' da classe 'Services'
não é necessário criar novamente as operações*/
class PessoasServices extends Services {
    /*Por se tratar de uma classe que trata especificamente as operações 
    chamadas através dos Services, é possível instanciar diretamente o 
    modelo a ser usado*/
    constructor() {
        super('Pessoas')
    }

    /*Métodos especificos do controlador 'Pessoas'*/
}

module.exports = PessoasServices
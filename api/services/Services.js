/*Classe responsável pela comunicação dos modelos e operações*/
const database = require('../models')

class Services {
    constructor(nomeModelo) {
        this.nomeModelo = nomeModelo
    }

    /*Usado na refatoração dos controladores onde, centralizando a execução de o
    operações através da pasagem do seu modelo via parâmetro */
    async buscarRegistros() {
        return database[this.nomeModelo].findAll()
    }

    async buscarRegistro(id) {
        return database[this.nomeModelo]
    }

    async criarRegistro(dados) {
        return database[this.nomeModelo]
    }

    async atualizarRegistro(dadosAtualizar, id) {
        return database[this.nomeModelo]
    }

    async deletarRegistro(dados, id) {
        return database[this.nomeModelo]
    }
}

module.exports = Services
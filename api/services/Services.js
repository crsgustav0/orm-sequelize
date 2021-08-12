/*Classe responsável pela comunicação dos modelos e operações*/
const database = require('../models')

class Services {
    constructor(nomeModelo) {
        this.nomeModelo = nomeModelo
    }

    async buscarRegistros() {
        return database[this.nomeModelo].findAll()
    }
}

module.exports = Services
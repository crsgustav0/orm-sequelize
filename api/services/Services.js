/*Classe responsável pela comunicação dos modelos e operações*/
const { where } = require('sequelize/types')
const database = require('../models')

class Services {
    constructor(nomeModelo) {
        this.nomeModelo = nomeModelo
    }

    /*Usado na refatoração dos controladores onde, centralizando a execução de
    operações através da pasagem do seu modelo via parâmetro,
     */
    async buscarRegistros() {
        return database[this.nomeModelo].findAll({ where: {...where } })
    }

    /*Usado na refatoração dos controladores onde, centralizada a execução de 
    operações através do seu modelo via parâmetro e filtro de registros, 
    sendo passados ou não*/
    async buscarRegistro(id) {
        return database[this.nomeModelo]
            .findOne({ where: {...where } })
    }

    /*Usado na  */
    async contarRegistros(
        /*Passa via parâmetro a regra de pesquisa de registros */
        where = {}, agregadores) {
        return database[this.nomeModelo]
            .findAndCountAll(
                /**/
                { where: {...where }, ...agregadores })
    }

    async atualizarRegistro(dadosAtualizar, id) {
        return database[this.nomeModelo]
    }

    async deletarRegistro(dados, id) {
        return database[this.nomeModelo]
    }
}

module.exports = Services
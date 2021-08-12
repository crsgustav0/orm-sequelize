const PessoasServices = require('./PessoasServices')
const TurmasServices = require('./TurmasServices')
const NiveisServices = require('./NiveisServices')

/*Exporta umá unica vez 
via objetos todos os serviços criados*/
module.exports = {
    PessoasServices: PessoasServices,
    TurmasServices: TurmasServices,
    NiveisServices: NiveisServices
}
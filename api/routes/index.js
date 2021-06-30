const bodyParser = require('body-parser')
const pessoas = require('./pessoasRoute')
const niveis = require('./niveisRoute')
const turmas = require('./turmasRoute')

module.exports = app =>{
    /*Notifica o Express que teria um intermediador entre as
     resposta e as requisições */
    app.use(bodyParser.json())
    app.use(pessoas)
    app.use(niveis)
    app.use(turmas)
}
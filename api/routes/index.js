const bodyParser = require('body-parser')
const pessoas = require('./pessoasRoute')

module.exports = app =>{
    /*Notifica o Express que teria um intermediador entre as
     resposta e as requisições */
    app.use(bodyParser.json())
    app.use(pessoas)
}
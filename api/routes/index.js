const bodyParser = require('body-parser')

module.exports = app =>{
    /*Notifica o Express que teria um intermediador entre as
     resposta e as requisições */
    app.use(bodyParser.json())

    app.get('/',(req,res) =>res.send('Olá!'))
}
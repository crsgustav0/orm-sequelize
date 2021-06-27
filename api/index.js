const express = require('express')
const routes = require('./routes')

const app = express()
const port = 3000

routes(app)

/*Sobe a aplicação e ao iniciar envia mensagem via console*/
app.listen(port, () => console.log(`Server is runnig on port ${port}`))

/*Torna o modulo acessivel a outros diretorios da aplicação*/
module.exports = app
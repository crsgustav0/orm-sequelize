const express = require('express')
const bodyParser = require('body-parser')

const app = express()

/*Notifica o Express que teria um intermediador entre as
     resposta e as requisições */
app.use(bodyParser.json)

const port = 3000

/*Method GET HTTP*/
app.get('/teste', (req,res) =>{
    res.status(200)//Cod. Status retorno requisição
    .send(//Retorna um objeto contendo mensagem
        {mensagem: "Welcome to API"}
        )
})

/*Sobe a aplicação e ao iniciar envia mensagem via console*/
app.listen(port, console.log(`Server is runnig on port ${port}`))

/*Torna o modulo acessivel a outros diretorios da aplicação*/
module.exports = app
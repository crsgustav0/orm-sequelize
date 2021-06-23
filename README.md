# orm-sequelize

Curso iniciado em: 23/06/2021
Linguagem: JavaScript

**Desenvolvido por: Cristian Gustavo Dias Andrade**



# Inicialização projeto:
> npm init -y

# Instalando bibliotecas iniciais:

- > npm install express
     - Usada para subir servidor local e gerenciamento de rotas.

>
- > npm install body-parser
    - Usada para conversão de dados no recebimento de respostas através das requisições.

>
- > npm install body-parser
    - Usada para conversão de dados no recebimento de respostas através das requisições.

# Definindo o arquivo de entrada
 - No arquivo **package.json** é necessário alterar o caminho do arquivo de entrada de **index.js** para **/api/index.js**


 # Instalando biblioteca Nodemon

- > npm install body-parser --save-dev nodemon
    - Utilizada para monitoramento das alterações da aplicações, onde automaticamente reinicia o servidor já com as alterações aplicadas.

>

# Definindo script "start"
- No arquivo **package.json** é necessário incluir dentro do objeto **script** o campo **start** com o conteúdo de **nodemon ./ap/index.js**.

- > npm run start
    - Utilizada para iniciar a aplicação já com o nodemon.

>

# Instalação MySQl
- > npm install mysql2
    - Banco que será utilizado.

>

# Instalação Sequelize
- > npm install sequelize sequelize-cli path
    
    - **Sequelize** 
    - Ferraenta, ORM que será utilizada para desenvolvimento da API.
    - **Sequelize-cli**
    -  Utilizado para recuros de linhas de comando.

>

# Instalação Sequelize
- > npx sequelize-cli init
    - Usado para criação de diretórios padrões.

    - **Sequelize** 
    - Ferraenta, ORM que será utilizada para desenvolvimento da API.
    - **Sequelize-cli**
    -  Utilizado para recuros de linhas de comando.

>

//npm init -y
//configurar o package.json
//o node-modules são dependenicas que o node precisa
//*package.lock faz o mapeamento
//node src/server.js
//npm install nodemon -d
//npm install numjucks

//a função vai fazer um pedido para o express e o mesmo vai retornar para dentro da variavel express
const express = require("express")
const server = express()

//fazer o express reconhecer a pasta public como uma pasta disponivel na web para poder achar os arquivos js e css
//configurarpasta publica
server.use(express.static("public"))

//utilizando template engine
let numjucks = require("nunjucks")
numjucks.configure("src/views", {
    express: server,
    noCache: true
})

//troque a tag script no arquivo json de 'teste' para 'start' para iniciar digitando apenas npm start

//configurar caminhos da minha aplicação

//página inicial
server.get("/", function(req, res){
//recebendo um caminho pelo pedido get
// o servidor funciona atraves de requisição e respostas
    return res.sendFile(__dirname+ "/views/index.html",)
})


server.get("/create-point", function(req, res){
    return res.sendFile(__dirname + "/views/create-point.html")
})

server.get("/search-results", function(req, res){
    return res.sendFile(__dirname + "/views/search-results.html")
})


//ligar o servidor
server.listen(3000)
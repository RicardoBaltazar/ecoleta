//npm init -y
//configurar o package.json
//o node-modules são dependenicas que o node precisa
//*package.lock faz o mapeamento
//node src/server.js
//npm install nodemon -d
//npm install numjucks
//npm install sqlite3

//a função vai fazer um pedido para o express e o mesmo vai retornar para dentro da variavel express
const express = require("express")
const server = express()

//pegar o banco de dados
const db = require("./database/db.js")

//fazer o express reconhecer a pasta public como uma pasta disponivel na web para poder achar os arquivos js e css
//configurarpasta publica
server.use(express.static("public"))

//habilitar o uso do req.body na nossa aplicação
server.use(express.urlencoded({extended: true}))

//utilizando template engine
const numjucks = require("nunjucks")
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

    //req.query: query strings da nossa url
    console.log(req.query)
    return res.sendFile(__dirname + "/views/create-point.html")
})

server.post("/savepoint", function(req,res){
    //req.body: o corpo do nosso formulário
    console.log(req.body)

    //inserir dados no banco de dados
    const query = 
    `INSERT INTO places (   
        name,
        address,
        address2,
        state,
        city,
        items
    ) VALUES (?,?,?,?,?,?);`

    const values = [
        req.body.name,
        req.body.address,
        req.body.address2,
        req.body.state,
        req.body.city,
        req.body.items
    ]

    function afterInsertData(err){
    if(err){
        return console.log(err)
    } else{
        console.log('Cadastrado com sucesso')
        console.log(this)

        return res.send("ok")
    }        
}


})

server.get("/search-results", function(req, res){

    const search = req.query.search

    //pegar dados do banco de dados
    db.all(`SELECT * FROM places WHERE city= '${search}'`, function(err, rows){
        if(err){
            return console.log(err)
        } else{
            console.log("Aqui estão seus registros")
            console.log(rows)

            //mostrar a página html com os dados do banco de dados
            return res.sendFile(__dirname + "/views/search-results.html")
        }
    })

})


//ligar o servidor
server.listen(3000)
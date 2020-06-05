//importar a dependencia do sqlite3
const sqlite3 = require('sqlite3').verbose()

//iniciar o objeto que ira fazer operações no banco de dados
const db = new sqlite3.Database("./src/database.db")

//exportar o objeto para ser usado em outro local
module.exports = db

//utilizar o objeto de banco de dados, para nossas operações 
db.serialize(function(){
    //criar uma tabela com comando sql
   /*
    db.run(`
        CREATE TABLE IF NOT EXISTS places (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            address TEXT,
            address2 TEXT,
            state TEXT,
            city TEXT,
            items TEXT
        );
    `)

    //inserir dados na tabela
    const query = 
            `INSERT INTO places (   
                name,
                address,
                address2,
                state,
                city,
                items
            ) VALUES (?,?,?,?,?,?);`

    const values =     [
    "Colectoria","Jardim America", 
    "n 260", "Santa Catarina",
    "Rio do Sul", "Resíduos"
    ]

    function afterInsertData(err){
        if(err){
            return console.log(err)
        } else{
            console.log('Cadastrado com sucesso')
            console.log(this)
        }        
    }

    //db.run(query, values, afterInsertData)

    //consultar dados da tabela
    db.all(`SELECT * FROM places`, function(err, rows){
        if(err){
            return console.log(err)
        } else{
            console.log("Aqui estão seus registros")
            console.log(rows)
        }
    })

    //deletar dados da tabela
    db.run(`DELETE FROM places WHERE id = ?`,[1], function(err){
        if(err){
            return console.log(err)
        } else{
            console.log("Registro deletado com sucesso")
        }
    })*/
})

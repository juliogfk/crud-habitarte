const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require('cors');

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "admin",
    database: "habitarte2",
});

app.use(cors());
app.use(express.json());

app.post('/register', async (req, res)=>{
    const {nome, sobrenome, email, estado, cidade, telefone, nicho} = req.body;

    let SQL = "INSERT INTO usuarios2 (nome, sobrenome, email, estado, cidade, telefone, nicho) VALUES (?,?,?,?,?,?,?)";
    try{
    await db.query(SQL, [nome, sobrenome, email, estado, cidade, telefone, nicho], (err, result) => {
        res.status(200).send("usuario adicionado com sucesso")
    });
    }catch (er) {
       res.status(500).send(err)
    }
});

app.get("/getUsuarios",async (req, res) => {
    let SQL = "SELECT * from usuarios2";
    
   await db.query(SQL, (err, result) => {
        if(err) res.status(500).send("erro ao recuperar os usuarios");
        
        res.status(200).send(result);
    });
});

app.put("/edit", async (req, res) => {
    const {id,nome,sobrenome,email,estado,cidade,telefone,nicho} = req.body;
    
    let SQL = "UPDATE usuarios2 SET nome = ?, sobrenome = ?, email = ?, estado = ?, cidade = ?, telefone = ?, nicho = ? WHERE id = ? ";

    await db.query(SQL,[nome, sobrenome, email, estado, cidade, telefone, nicho, id], (err, result) => {
        if(err) res.status(500).send("usuario não localizado");
        res.send(result);
    });
});

app.listen(3001, () => {
    console.log("rodando servidor");
});

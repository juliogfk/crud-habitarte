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

app.post('/register', (req, res)=>{
    const {nome} = req.body;
    const {sobrenome} = req.body;
    const {email} = req.body;
    const {estado} = req.body;
    const {cidade} = req.body;
    const {telefone} = req.body;
    const {nicho} = req.body;

    let SQL = "INSERT INTO usuarios2 (nome, sobrenome, email, estado, cidade, telefone, nicho) VALUES (?,?,?,?,?,?,?)";
    db.query(SQL, [nome, sobrenome, email, estado, cidade, telefone, nicho], (err, result) => {
        console.log(err);
    });
});

app.get("/getUsuarios", (req, res) => {
    let SQL = "SELECT * from usuarios2";
    
    db.query(SQL, (err, result) => {
        if(err) console.log(err);
        else res.send(result);
    });
});

app.put("/edit", (req, res) => {
    const {id} = req.body;
    const {nome} = req.body;
    const {sobrenome} = req.body;
    const {email} = req.body;
    const {estado} = req.body;
    const {cidade} = req.body;
    const {telefone} = req.body;
    const {nicho} = req.body;

    let SQL = "UPDATE usuarios2 SET nome = ?, sobrenome = ?, email = ?, estado = ?, cidade = ?, telefone = ?, nicho = ? WHERE id = ? ";

    db.query(SQL,[nome, sobrenome, email, estado, cidade, telefone, nicho, id], (err, result) => {
        if(err) console.log(err);
        else res.send(result);
    });
});

app.listen(3001, () => {
    console.log("rodando servidor");
});
const express = require("express");
const app = express();
const cors = require('cors');
//rota usuarioSenha
const rotaUsuarioSenha = require('./users/usuarioSenha');

const db = require("./database/configDatabase");

app.use(cors());
app.use(express.json());
// app para rota usuarioSenha
app.use('/usuarioSenha', rotaUsuarioSenha);

app.post('/register', async (req, res) => {
    const {nome, sobrenome, email, estado, cidade, telefone, nicho} = req.body;

    const SQL = "INSERT INTO usuarios2 (nome, sobrenome, email, estado, cidade, telefone, nicho) VALUES (?,?,?,?,?,?,?)";
    try{
    await db.query(SQL, [nome, sobrenome, email, estado, cidade, telefone, nicho], (err, result) => {
        res.status(200).send("usuário adicionado com sucesso")
    });
    }catch (err) {
       res.status(500).send(err)
    }
});

app.get("/getUsuarios", async (req, res) => {
    const SQL = "SELECT * from usuarios2";
    
   await db.query(SQL, (err, result) => {
        
        if(err) res.status(500).send("erro ao recuperar os usuários");
        
        res.status(200).send(result);
    });
});

app.put("/edit", async (req, res) => {
    const {nome,sobrenome,email,estado,cidade,telefone,nicho, id_usuario} = req.body;
    
    const SQL = "UPDATE usuarios2 SET nome = ?, sobrenome = ?, email = ?, estado = ?, cidade = ?, telefone = ?, nicho = ? WHERE id_usuario = " + id_usuario;

    await db.query(SQL,[nome, sobrenome, email, estado, cidade, telefone, nicho, id_usuario], (err, result) => {
        
        if(err) res.status(500).send("usuário não localizado");
        
        res.send(result);
    });
});

app.delete("/delete/:id_usuario", async (req, res) => {
    const {id_usuario} = req.params;
    const SQL = "DELETE FROM usuarios2 WHERE id_usuario = ?";
    await db.query(SQL, id_usuario, (err, result) => {
        
        if(err) res.status(500).send("usuário não localizado");
        
        res.send(result);
    });
});

app.listen(3001, () => {
    console.log("rodando servidor");
});

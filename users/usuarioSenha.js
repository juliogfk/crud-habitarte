const express = require('express');
const app = express.Router();
const mysql = require("mysql");
const bcrypt = require('bcrypt');
const { response } = require('express');
//trazendo o db teste
const db = require("./database/configDatabase");

app.post('/cadastro', async (req, res, next) =>{
    mysql.getConnection((err, conn) => {
        if(error) {return res.status(500).send({ error: error }) }
        bcrypt.hash(req.body.senha, 10, (errBcrypt, hash) => {
            if(errBcrypt) { return res.status(500).send({ error: errBcrypt }) }
            conn.query(
                'INSERT INTO usuarios2 (email, senha) VALUES (?,?)',
                [req.body.email, hash], 
                (error, results) => {
                    conn.release();
                   if(error) { return res.status(500).send({ error: error }) } 
                   response = {
                    mensagem: "Usuário criado com sucesso",
                        usuarioCriado: {
                            email: req.body.email
                        }
                   }    
                   return res.status(201).send(response)
                        
                })
        });
    });
})

module.exports = app;
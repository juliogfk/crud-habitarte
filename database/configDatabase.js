const mysql = require("mysql");

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "admin",
    database: "habitarte2",
});

export default db;
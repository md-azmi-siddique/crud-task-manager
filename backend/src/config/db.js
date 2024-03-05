// db.js
const mysql = require('mysql');

const db = mysql.createConnection({
    // your database connection configuration
    host: "localhost",
    user: "root",
    password: "azmi28azmi",
    database: "crud_schema"
});

//if Auth error occurs
// ALTER USER 'root'@'localhost' IDENTIFIED WITH 'mysql_native_password' BY 'azmi28azmi';

db.connect((err) => {
    if (err) {
        console.error('Database connection failed:', err);
    } else {
        console.log('Connected to the database');
    }
});

module.exports = db;

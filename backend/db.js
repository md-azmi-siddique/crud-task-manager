// db.js
const mysql = require('mysql');

const db = mysql.createConnection({
    // your database connection configuration
    host: "localhost",
    user: "root",
    password: "azmi28azmi",
    database: "crud_schema"
});

db.connect((err) => {
    if (err) {
        console.error('Database connection failed:', err);
    } else {
        console.log('Connected to the database');
    }
});

module.exports = db;

const express = require("express")
const mysql = require("mysql")

const router = require("./src/routes/api");
const app = express()

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "azmi28azmi",
    database: "crud_schema"

})

db.connect((err) => {
    if (err) {
        console.log("Error connecting to the database:", err);
    }
    else{
        console.log("Connected to the database");    
    }
    
});

app.use("/api",router)


module.exports = app
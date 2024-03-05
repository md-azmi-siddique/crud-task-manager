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

app.use("/",router)


module.exports = app
const express = require("express")
const mysql = require("mysql")
const cors = require("cors")
const hpp = require("hpp")
const helmet = require("helmet")

const router = require("./src/routes/api");
const app = express()

//MiddleWare
app.use(cors())
app.use(helmet())
app.use(hpp())


//Database Connection
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

//api Route Connect
app.use("/api",router)

//undefined route
app.use('*', (req,res)=>{
    res.status(404).json({
        status: "Fail",
        data: "Not Found Anything on this URL"

    })
})


module.exports = {
    app: app,
    db: db,
};



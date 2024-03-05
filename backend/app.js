const express = require("express")
const mysql = require("mysql")
const cors = require("cors")
const hpp = require("hpp")
const helmet = require("helmet")
const rateLimit = require("express-rate-limit")
const cookie = require("cookie-parser")

const router = require("./src/routes/api");
const app = express()

//MiddleWare
app.use(cors())
app.use(helmet())
app.use(hpp())

//limit for request
const limiter = rateLimit({windowMs: 15 * 60 * 100, max: 300}) 
app.use(limiter);
app.use(cookie())

//api Route Connect
app.use("/api",router)

//undefined route
app.use('*', (req,res)=>{
    res.status(404).json({
        status: "Fail",
        data: "Not Found Anything on this URL"

    })
})


module.exports = app



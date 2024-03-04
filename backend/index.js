const app = require("./app")

const dotenv = require("dotenv")
dotenv.config({
    path: "./config.env"
})

// app.listen(4000,()=>{
//     console.log("Running 4000")
// })


app.listen(process.env.RUNNING_PORT,()=>{
    console.log(`Running from dotenv "localhost:${process.env.RUNNING_PORT}/"`)
})


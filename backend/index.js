const {app} = require("./app")


app.listen(4000,()=>{
    console.log("Running 4000")
})


// app.listen(process.env.RUNNING_PORT,()=>{
//     console.log(`Running from dotenv "localhost:${process.env.RUNNING_PORT}/"`)
// })


module.exports=(req,res,next)=>{
    console.log("This is Middleware")
    next();
    // return res.end("Stop Here");
}
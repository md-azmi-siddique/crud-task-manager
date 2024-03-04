exports.Hello1 = (req,res)=>{
    return res.status(200).json({
        status:"OK",
        text:"Hello"
    });
}
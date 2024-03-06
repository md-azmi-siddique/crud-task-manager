// Import the db connection
const db = require("../config/db")

exports.homeTest = async (req, res) => {
    return res.status(200).json({
        data: "welcome",
    });
}

exports.tasks = (req, res) => {
    const q = "select * from crud";

    // Execute the SQL query using the db connection
    db.query(q, (err, data) => {
        if (err) {
            console.error("Database error:", err);
            return res.status(500).json({ error: "Internal Server Error" });
        } else {
            return res.json(data);
        }
    });
};


exports.tasksPost = async (req, res) => {
    const q = "insert into crud (`title`,`description`,`coverPic`) values (?)";
    const values = [
        req.body.title,
        req.body.description,
        req.body.coverPic,
    ]
    db.query(q, [values] ,(err, data) => {
        if (err) {
            console.error("Database error:", err);
            return res.status(500).json({ error: "Internal Server Error" });
        } else {
            // return res.json(data);
            return res.json("task created");
        }
    });
}


exports.tasksDelete= async(req,res) =>{
    const crudId = req.params.id
    const q = "DELETE FROM crud where id = ?"
    db.query(q, [crudId], (err,data)=>{
        if (err) {
            console.error("Database error:", err);
            return res.status(500).json({ error: "Internal Server Error" });
        } else {
            // return res.json(data);
            return res.json("task deleted");
        }
    })
}

exports.tasksUpdate= async(req,res) =>{
    const crudId = req.params.id
    const q = "UPDATE crud set `title` = ?, `description` = ?, `coverPic`=? where id = ?";
    const values = [
        req.body.title,
        req.body.description,
        req.body.coverPic,
    ]
    db.query(q, [...values,crudId], (err,data)=>{
        if (err) {
            console.error("Database error:", err);
            return res.status(500).json({ error: "Internal Server Error" });
        } else {
            // return res.json(data);
            return res.json("task updated");
        }
    })
}

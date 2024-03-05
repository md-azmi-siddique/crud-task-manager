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

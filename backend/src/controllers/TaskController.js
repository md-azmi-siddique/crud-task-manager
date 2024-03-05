
// Import the app and db connection
const { app, db } = require("../../app");

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
            return res.json("This is an error");
        } else {
            return res.json(data);
        }
    });
}

exports.welcome2 = async (req, res) => {
    return res.status(200).json({
        data: "welcome2",
    });
}


/*
// TaskController.js
const createApp = require("../../app");

const { app, db } = createApp();

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
            return res.json("This is an error");
        } else {
            return res.json(data);
        }
    });
}

exports.welcome2 = async (req, res) => {
    return res.status(200).json({
        data: "welcome2",
    });
}
*/
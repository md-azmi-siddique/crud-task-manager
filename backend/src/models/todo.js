// models/UserModel.js
const db = require('../config/db');

// Define the SQL query to create the 'users' table
const todoTable = `
    CREATE TABLE IF NOT EXISTS users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        description VARCHAR(255) NOT NULL,
        coverPic VARCHAR(255) NOT NULL,
    )
`;

// Execute the SQL query to create the 'users' table
db.query(createUserTableQuery, (err, results) => {
    if (err) {
        console.error('Error creating users table:', err);
    } else {
        console.log('Users table created successfully');
    }
});

module.exports = db;

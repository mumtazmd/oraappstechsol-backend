// db.js
const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',              // 👈 Default username
    password: 'admin123',         // 👈 THIS IS WRONG??
    database: 'jobDB'
  });

module.exports = pool.promise(); // Share this key with others
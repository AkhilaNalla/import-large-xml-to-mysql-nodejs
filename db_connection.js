// const mysql = require('mysql');
const mysql = require('mysql2');
/****** Connection for Source Table ******/
let connDB = mysql.createConnection({
    host: 'localhost',
    user: 'akhila',
    password: 'Easy@2020',
    database: 'super_store'
});

module.exports = { connDB };

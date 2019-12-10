'user strict';
let dotenv = require('dotenv');
dotenv.config();

let mysql = require('mysql');
let dhost = process.env.D_HOST || 'localhost';
let dport = process.env.D_PORT || 3306;
let duser = process.env.D_USER || 'test';
let dpass = process.env.D_PASS || 't#12@3est';
let ddaba = process.env.D_DATABASE || 'test';

//local mysql db connection
let connection = mysql.createConnection({
    host     : dhost,
    port     : dport,
    user     : duser,
    password : dpass,
    database : ddaba
});

connection.connect(function(err) {
    if (err) throw err;
});

module.exports = connection;

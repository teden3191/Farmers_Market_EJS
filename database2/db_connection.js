var mysql = require('mysql');

var connection = mysql.createConnection({
    host: "127.0.0.1",
    port : "3306",
    user: "root",
    password: "3191",
    database : "farmersmarket",
    insecureAuth : true
});


connection.connect(function(err) {
    if (err) throw err;
    if (!err) console.log("Connected!");
    else console.log("It didnt work");
    connection.query("show tables", function (err, result) {
        console.log(result)});
    connection.query("SELECT * FROM caccounts", function (err, result) {
        if (err) throw err;
        console.log(result)});
    connection.query("SELECT * FROM faccounts", function (err, result) {
        if (err) throw err;
        console.log(result)});
    connection.query("SELECT * FROM items", function (err, result) {
        if (err) throw err;
        console.log(result)});
});
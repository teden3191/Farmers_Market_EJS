var mysql = require('mysql');

var connection = mysql.createConnection({
    host: "127.0.0.1",
    port : "3306",
    user: "root",
    password: "3191",
    database : "farmersmarket",
    insecureAuth : true
});

var customerList = [];
connection.connect();
connection.query('SELECT * FROM faccounts', function(err, rows) {
    if (err) {
        res.status(500).json({"status_code": 500,"status_message": "internal server error"});
    } else {
        // Loop check on each row
        for (var i = 0; i < rows.length; i++) {

            // Create an object to save current row's data
            var customer = {
                'UserName':rows[i].fUserName,
                'Password':rows[i].fPassword,
                'Email':rows[i].fEmail
            };
            // Add object into array
            customerList.push(customer);
        }

        // Render index.pug page using array
        console.log(customerList);
    }
});
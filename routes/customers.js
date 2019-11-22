var express = require('express');
//var router = express.Router();
var app = express();

/* GET users listing. */
app.get('/Customers', function(req, res) {
  res.render('Customers', { title: 'Customers' });
});

app.get('/', function(req, res) {
  res.render('CreateCustomerAccount', { title: 'Create Customer Account' });
});

app.get('/CustomerLogin', function(req, res) {
  res.render('CustomerLogin', { title: 'Customer Login' });
});

//module.exports = router
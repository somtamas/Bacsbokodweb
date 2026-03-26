const express = require('express');
const app = express();
const mssql = require("mssql");

app.get('/', function (req, res) {
const config = {
    user: 'root',
    password: '',
    server: 'localhost',
    database: 'geek'
};

mssql.connect(config, function (err) {
    let request = new mssql.Request();
    request.query('select * from proflesdatabase',
    function (err, records) {
    if (err) 
      console.log(err)
      res.send(records);
    });
  });
});
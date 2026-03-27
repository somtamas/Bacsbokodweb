// const express = require('express');
// const app = express();
const mysql = require("mysql");

// app.get('/', function (req, res) {
// const config = {
//     user: 'root',
//     password: '',
//     server: 'localhost',
//     database: 'geek'
// };

// mysql.connect(config, function (err) {
//     let request = new mysql.Request();
//     request.query('select * from proflesdatabase',
//     function (err, records) {
//     if (err) 
//       console.log(err)
//       res.send(records);
//     });
//   });
// });


let username = document.getElementById('nevinput');
let password = document.getElementById('jelszoinput');

let con = mysql.createConnection({
  host: "localhost",
  user: "yourusername",
  password: "yourpassword"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  let sql = "INSERT INTO customers (name, address) VALUES (username, password)";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Sikeres betöltés!");
  });
});
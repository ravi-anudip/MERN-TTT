var express = require('express');
const app = express();
var ejs = require('ejs');

// var mysql = require('mysql2');
const db_conn = require('./db_conn.js');

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// var conn =mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: 'root',
//   database:'mern_ttt'
// });

// conn.connect((err) => {
//   if (err) throw err;
//   console.log("database is connected");
// });

app.get('/', (req, res) => { 
  res.send("home page ....");
});

app.get('/adduser', (req, res) => {
  res.render('adduser');
});

app.post('/adduser_submit',(req,res) => {
  const {fname, lname, dob, gender } = req.body;
  db_conn.query("insert into user (fname,lname,dob,gender) values (?,?,?,?)", [fname, lname, dob, gender], (err, result) => {
    if (err) throw err;
    if (result.insertId > 0) res.send("<h1>One Record inserted with id :- "+result.insertId+"</h1>");
  });
});



app.listen(8080, () => console.log("servre running at port no 8080"));
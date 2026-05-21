let express = require('express');
const app = express();
const db_conn = require('./db_conn.js');
var ejs = require('ejs');

app.set('view engine', 'ejs');


app.get('/listuser', (req, res) => {
  db_conn.query('select * from user', (err, result, fieldlist) => { 
    if (err) throw err;
    else {
      // console.log(result);
      // return res.send("result is printed at console");
      res.render('UserList',{data:result});
    }
  });
});

app.listen(8080, () => console.log("server running at port no 8080"));
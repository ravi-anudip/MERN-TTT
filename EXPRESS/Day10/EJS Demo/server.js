var express = require('express');
const app = express();
var ejs = require('ejs');

app.set('view engine', 'ejs');

app.get('/', (req, res) => { 
  res.send("Welcome to home page..");
});

app.get('/ejs', (req, res) => {
  res.render('ejshome',{msg:"hi this is MERN TTT"});
});

app.listen(8080, () => console.log("server is running on 8080"));
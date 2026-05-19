var express = require('express');
const app = express();
var path = require('path');

app.use(express.urlencoded({ extended: true, limit: '2mb' }));

app.use(express.static('public'));

app.get('/', (req, res) => { 
  res.send("Welcome to home page..");
});

app.get('/html-file', (req, res) => {
  //res.send(__dirname + "<br/>"+__filename)
  res.sendFile(path.join(__dirname,"/public/form.html"));
});

app.listen(8080, () => console.log("server is running on 8080"));
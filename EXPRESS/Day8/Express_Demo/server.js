var express = require('express')

const app = express();

app.get("/", (req,res) => {
  res.send("Hello express js home page ");
});

app.get("/aboutus", (req, res) => {
  res.send("<h1>About Us Page..</h1>");
});
 
app.get("/jsondemo", (req, res) => { 
  res.send({'msg':"Hello this is json Demo"});
});

app.listen(8080, () => console.log("server is running on 8080"));
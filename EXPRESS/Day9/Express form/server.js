var express = require('express')

const app = express();

app.use(express.urlencoded({ extended: true, limit: '2mb' }));

app.get("/", (req,res) => {
  res.send("Hello express js home page ");
});


app.get("/getform", (req, res) => {
  res.send("<html>"+
  "<form action='/via-get' method='get'>"+
    "<input type='text' name='username' placeholder='Enter your name'/>"+
    "<input type='email' name='useremail' placeholder='Enter your email'/>"+
    "<input type='submit'/>"+
  "</form>"+
"</html>");
});

app.get("/via-get", (req, res) => {
  const user = req.query["username"];
  const email = req.query["useremail"];
  res.send(
    "<p>Your User Name is : <b>"+user+"</b></p>" +
    "<br/>" +
    "<p>Your Email is : <b>"+email+"</b></p>"
  );
});
 
app.get("/postform", (req, res) => {
  res.send("<html>"+
  "<form action='/via-post' method='post'>"+
    "<input type='email' name='useremail' placeholder='Enter your email'/>"+
    "<input type='text' name='password' placeholder='Enter your Password'/>"+
    "<input type='submit'/>"+
  "</form>"+
"</html>");
});

app.post("/via-post", (req, res) => {
  const email = req.body.useremail;
  const pass = req.body.password;
  res.send(
    
    "<p>Your Email is : <b>" + email + "</b></p>" +
    "<p>Your Password is : <b>" + pass + "</b></p>" 
  );
});



app.listen(8080, () => console.log("server is running on 8080"));
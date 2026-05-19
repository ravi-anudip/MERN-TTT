var http = require('http');

http.createServer((req, res) => {
  console.log(req.url);
  if (req.url === "/") {
    
    res.write("This is the home page.");
    res.end
    
  } else if (req.url === "/aboutus") {

    res.write("This is the aboutus page.");

  } else if (req.url === "/contectus") {
    
    res.writeHead(200, { 'content-type': 'text/html' });
    res.write("<form action='/' method='get'>");
    res.write("<input type='text' name='username' placeholder='Enter your Name' />");
    res.write("<input type='email' name='email' placeholder='Enter your Email' />");
    res.write("<input type='number' name='mobile' placeholder='Enter your Mobile Number' />");
    res.write("<input type='submit'/>");
    res.write("</form>");

  } else {
    
    res.writeHead(404, { 'content_type': 'text/html' });
    res.end("Page not found.");

  }
  res.end("");
}).listen(8080, () => console.log("Routing server is running on port 8080"));
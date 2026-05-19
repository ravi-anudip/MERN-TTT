var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, { 'content-type': 'text/html' });
  res.write("<b>Hello how are you</b>");
  res.end("<div>End of output</div>");
}).listen(8080,()=>{console.log("Hi, Server started at prot 8080 ")});
const http = require('http');

// the http module has a createServer method and takes 1 arg
//1. callback, callback has 2 args: req, res
const server = http.createServer((req, res) => {
  // console.log(req);
  // res = our way of responding to the requester
  // http message
  // 1. start - line
  // 2. header
  // 3. body

  // writeHead takes 2 args:
  // 1. status code
  // 2. object for the mime-type
  res.writeHead(200, { 'content-type': 'text/html' });
  res.write('<h1>Hello, world!</h1>');
  res.end();
});

// createServer returns an object with a listen method
// listen takes 1 arg
// 1. port to listen for http traffic on
server.listen(3000);

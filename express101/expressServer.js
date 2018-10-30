// NODEJS is the language
// Express is node, a node module, more specifically
const path = require('path');

// express is a third party module, it's not a native module to node
const express = require('express');
// define an app by invoking the export of the express module
// which is called createApplication inside the express module
const app = express();

// serve up static files. only 1 line at a time
app.use(express.static('public'));

// all is a MSInputMethodContext, and it takes 2 args:
// 1. route
// 2. callback to run the route requested
app.all('*', (req, res) => {
  // Express handles the basic headers (status code, mime-type)
  console.log(path.join(__dirname + '/node.html'));
  res.sendFile(path.join(__dirname + '/node.html'));
  // res.send(`<h1>This is the homepage</h1>`);
  // Express handles the end, awesome!
});

app.all('*', (req, res) => {
  res.send('<h1>Sorry, this page does not exist</h1>');
});

app.listen(3001);
console.log('The server is listening on port 3001...');

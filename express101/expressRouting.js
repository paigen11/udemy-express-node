const express = require('express');
const app = express();

// app object has a few methods
// HTTP verbs! REST verbs
// CRUD app correspondence!
// 1. get - READ
// the DEFAULT for all browsers is GET
// 2. post - CREATE
// 3. delete - DELETE
// 4. put - UPDATE
// 5. all - I will accept any method

// Take 2 args:
// 1. path
// 2. callback to run if HTTP request that matches this verb is made to the path in #1
// if you have multiple calls with the same route, express will always take the first
app.get('/', (req, res) => {
  res.send(`<h1>Welcome to the home GET page!</h1>`);
});

app.post('/', (req, res) => {
  res.send(`<h1>Welcome to the POST home page!</h1>`);
});

app.delete('/', (req, res) => {});

app.put('/', (req, res) => {});

app.listen(3000);
console.log('The server is listening on port 3000...');

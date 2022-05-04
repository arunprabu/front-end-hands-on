// importing express
const express = require('express');
const path = require('path');

const app = express()  // setting up express app - Creating an Express application.
const port = 3000;

app.get('/', (req, res) => { // req object, res object 
  console.log('Req received'); // check server console
  res.sendFile(path.join(__dirname, '/public/index.html'));
});

app.get('/about', (req, res) => { // req object, res object 
  res.sendFile(path.join(__dirname, '/public/about.html'));
});

app.get('/support', (req, res) => {
  res.send(`<html>
    <head><title>Express App</title>
    <body>
      <h1>Support Center!</h1>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/support">Support</a></li>
        <li><a href="/users">Users</a></li>
      </ul>
    </body>
  </html>`);
});

app.get('/users', (req, res) => { // REST API Endpoint
  const users = [{
    id: 1,
    name: 'Arun',
    phone: 234234,
    email: 'a@b.com'
  },
  {
    id: 2,
    name: 'John',
    phone: 63456435,
    email: 'j@k.com'
  }];

  res.json(users);
});

app.listen(port, () => {
  console.log(`Contact Manager App is listening on port ${port}`)
})
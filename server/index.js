const express = require('express');
const app = express();
const PORT = 3000 || process.env.PORT;
const Movie = require('../database')
const mongoose = require('mongoose')

app.use(express.static('public'));
app.use(express.json());

const loggingMiddleware = (req, res, next) => {
  const logStr = `${req.method} request coming in for ${req.url}`
  console.log(logStr);
  next();
}

app.get('/api', (req, res) => {
  Movie.find()
    .then(data => {
      console.log(data);
      res.send(data, 200);
    })
    .catch(err => {
      console.log(err);
      res.send(500);
    })
})

app.post('/api', (req, res) => {
  Movie.create(req.body)
  .then(() => res.send(201))
  .catch(err => {
    console.log(err);
    res.sendStatus(500)
  })
})

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
})
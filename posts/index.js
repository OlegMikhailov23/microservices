const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const {randomBytes} = require('crypto');
app.use(cors());

app.use(bodyParser.json());

const posts = {};

app.get('/posts', (req, res) => {
  res.send(posts);
})

app.post('/posts', (req, res) => {
  const id = randomBytes(4).toString('hex');
  const {title} = req.body;
  posts[id] = {id, title};
  console.log('here')
  res.status(201).send(posts[id]);
})

app.listen(4000, (req, res) => {
  console.log('Listening on 4000')
})

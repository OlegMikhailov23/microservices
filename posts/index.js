const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const {randomBytes} = require('crypto');
const axios = require('axios');
app.use(cors());

app.use(bodyParser.json());

const posts = {};

app.get('/posts', (req, res) => {
  res.send(posts);
})

app.post('/posts', async(req, res) => {
  const id = randomBytes(4).toString('hex');
  const {title} = req.body;
  posts[id] = {id, title};

  await axios.post('http://event-bus-srv:4005/events', {
    type: 'PostCreated',
    data: {title, id}
  });

  res.status(201).send(posts[id]);
})

app.post('/events', (req, res) => {
  console.log('Received event', req.body.type);
  res.send({});
})

app.listen(4000, (req, res) => {
  console.log("v55");
  console.log('Listening on 4000')
})

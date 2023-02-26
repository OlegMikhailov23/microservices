const express = require('express');
const app = express();
const {randomBytes} = require('crypto');
const bodyParser = require('body-parser');
app.use(bodyParser.json());

const commentsByPostId = {};

app.get('/posts/:id/comments', (req, res) => {
  res.send(commentsByPostId[req.params.id] || [])
})

app.post('/posts/:id/comments', (req, res) => {
  const commentId = randomBytes(4).toString('hex');
  const { content } = req.body;
  comments = commentsByPostId[req.params.id] || [];

  comments.push({id: commentId, content});

  commentsByPostId[req.params.id] = comments;

  res.status(201).send(comments);
})

app.listen(4001, (req, res) => {
  console.log('Listening on 4001')
})
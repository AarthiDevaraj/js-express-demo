const express = require('express');

const app = express();

const baseRouter = express.Router();

baseRouter.get('/api/items', (req, res) => {
  res.send({ message: 'Get From express', on: new Date() });
});

baseRouter.get('/api/items/:id', (req, res) => {
  res.send({ message: 'Get From express', on: new Date() });
});

baseRouter.get('/api/items/:id/:year', (req, res) => {
  res.send({ message: 'Get From express', on: new Date(), params: req.params });
});

baseRouter.post('/api/items', (req, res) => {
  res.send({ message: 'Post From express', on: new Date() });
});

baseRouter.put('/api/items', (req, res) => {
  res.send({ message: 'Put From express', on: new Date() });
});

baseRouter.delete('/api/items', (req, res) => {
  res.send({ message: 'Delete From express', on: new Date() });
});

app.use('/', baseRouter);

app.listen(3000);

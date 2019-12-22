const express = require('express');

const app = express();

app.use('/', (req, res) => {
  res.send({ message: 'From express', on: new Date() });
});

app.listen(3000);

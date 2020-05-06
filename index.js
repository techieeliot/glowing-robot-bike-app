const express = require('express')
const app = express();
const PORT = PORT.process.env || 8888;

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.listen(888, () => {
  console.log(`Example app listening on port ${PORT}!`)
});
const express = require('express')
const app = express();
const PORT = process.env.PORT || 8888;

const { createUser } = require('./api/signup')

//Sign up
app.post('/signup', createUser)

app.listen(8888, () => {
  console.log(`Example app listening on port ${PORT}!`)
});
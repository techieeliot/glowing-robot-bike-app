const express = require('express')
const db = require('mysql')
const path = require('path')
const app = express();
const { createUser } = require('./api/signup')
const { loginUser } = require('./api/login')
app.use(express.static('public'));
app.use(express.json({ limit: '1mb' }));
const PORT = process.env.PORT || 8888;

const axios = require('axios');
const config = { headers: { 'Content-Type': 'multipart/form-data' } };
axios.post('https://localhost:8888/signup', {
    username: `Fred` ,
    password: `5`,
}, config)
    .then(response => {
    console.log(response.data)
    })
    .catch(error => {
    console.log(error)
    })

    axios({
        method: 'post',
        url: '/signup',
        data: {
          firstName: 'Fred',
          lastName: 'Flintstone'
        }
      });



//Sign up
app.post('/signup', createUser)

//Login
// app.post('/login', )

app.listen(8888, () => {
  console.log(`Example app listening on port ${PORT}!`)
});
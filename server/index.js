const express = require('express');
const config = require('./config');
// const http = require('http')

const AuthorizationRoutes = require('./authorization/AuthorizationRoutes')

const app = express()
// const app = http.createServer((req, res) => {

//   AuthorizationRoutes(req, res)
// })
const mongoose = require('mongoose');

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const UserModel = require('./common/models/user/UserModel')
const PORT = config.port

UserModel.initialize(mongoose);

mongoose.connect(config.dbUrl)
  .then(() => {
    console.log('connected to db')
    app.use('/', AuthorizationRoutes)
  })
  .catch(() => console.log('something went wrong'))


app.listen(PORT, () => console.log('Server up at :', PORT))
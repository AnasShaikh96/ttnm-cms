const express = require('express');
const config = require('./config');

const AuthorizationRoutes = require('./authorization/AuthorizationRoutes')
const BlogRoutes = require('./common/models/blog/BlogRoutes')

const app = express()
const mongoose = require('mongoose');
const cors = require('cors')

app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended: true }))

const UserModel = require('./common/models/user/UserModel')
const BlogModel = require('./common/models/blog/BlogModel')
const PORT = config.port

UserModel.initialize(mongoose);
BlogModel.initialize(mongoose);

mongoose.connect(config.dbUrl)
  .then(() => {
    console.log('connected to db')
    app.use('/', AuthorizationRoutes)
    app.use('/blog', BlogRoutes)
  })
  .catch(() => console.log('something went wrong'))


app.listen(PORT, () => console.log('Server up at :', PORT))
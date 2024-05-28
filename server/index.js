const express = require('express');
const config = require('./config');
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))


const PORT = config.port
const mongoose = require('mongoose');




mongoose.connect(config.dbUrl)
  .then(() => console.log('connected to db'))
  .catch(() => console.log('something went wrong'))


app.listen(PORT, () => console.log('Server is up on :', PORT))
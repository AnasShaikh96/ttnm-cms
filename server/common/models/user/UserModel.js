const mongoose = require('mongoose');


const UserModel = new mongoose.Schema({
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  email: {
    type: String,
    unique: true
  },
  password: {
    type: String
  }
})


module.exports = {
  initialize: (mongoose) => {
    return this.model = mongoose.model('user', UserModel)
  },
  create: (user) => {
    return this.model.create(user)
  },
  find: (query) => {
    return this.model.find(query)
  },
} 
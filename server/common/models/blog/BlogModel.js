

const mongoose = require('mongoose')


const BlogModel = new mongoose.Schema({
  title: { type: String },
  content: { type: String },
  status: { type: String, default: 'Active' },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
})


module.exports = {
  initialize: (mongoose) => {
    this.model = mongoose.model('blogs', BlogModel)
  },
  create: (blog) => {
    return this.model.create(blog)
  },
  find: (blog) => {
    return this.model.find(blog)
  },
  findAndUpdate: (id, data) => {
    return this.model.findOneAndUpdate({ _id: id }, data)
  }
}
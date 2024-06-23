

const mongoose = require('mongoose')


const BlogModel = new mongoose.Schema({
  title: { type: String },
  content: { type: String },
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
}
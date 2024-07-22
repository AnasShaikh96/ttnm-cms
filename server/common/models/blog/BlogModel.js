

const mongoose = require('mongoose')


const BlogModel = new mongoose.Schema({
  title: { type: String },
  content: { type: String },
  createdBy: {
    id: {
      type: mongoose.Schema.Types.ObjectId, ref: 'user'
    }
  },
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
  find: (blog, sortBy, offset, limit) => {
    return this.model.find(blog).sort(sortBy ?? {}).limit(limit).skip(offset)
  },
  findAndUpdate: (id, data) => {
    return this.model.findOneAndUpdate({ _id: id }, data);
  }
}
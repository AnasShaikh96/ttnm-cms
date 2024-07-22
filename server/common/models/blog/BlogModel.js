

const mongoose = require('mongoose')


const BlogModel = new mongoose.Schema({
  title: { type: String, index: true },
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

BlogModel.index({ title: 'text' })

// BlogModel.index({ title: 'text', content: 'text' }, {
//   weights: {
//     title: 5,
//     content: 3
//   },
//   name: 'title_content'
// })

// https://stackoverflow.com/questions/57446123/mongoose-not-creating-text-indexes-for-multiple-fields

module.exports = {
  initialize: (mongoose) => {
    this.model = mongoose.model('blogs', BlogModel)
  },
  create: (blog) => {
    return this.model.create(blog)
  },
  find: (blog, sortBy, offset, limit, search) => {
    return this.model.find(blog).sort(sortBy ?? {}).limit(limit).skip(offset).find(search)
  },
  findAndUpdate: (id, data) => {
    return this.model.findOneAndUpdate({ _id: id }, data);
  }
}
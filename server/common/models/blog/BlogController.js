const BlogModel = require('./BlogModel')
const UserModel = require('../user/UserModel')


module.exports = {
  createBlog: async (req, res) => {

    try {

      const { title, content } = req.body;
      const { email } = req.user;

 
      if (!title || !content) {
        throw new Error('Title or Content is missing.')
      }

      const user = await UserModel.find({ email });
      if (!user) {
        throw new Error('User not found.');
      }

      const blog = await BlogModel.create({ title, content, createdBy: user._id });

      const populatedBlog = await BlogModel.find(blog._id).populate('createdBy');


      res.status(200).json({
        status: 'success',
        data: populatedBlog
      })


    } catch (error) {
      res.status(500).json({
        status: false,
        error: {
          message: error.message
        }
      })
    }

  },
  findAllBlogs: async (req, res) => {

    try {
      const getBlogs = await BlogModel.find()
      const { email } = req.user;

      const getUser = await UserModel.find({ email });
      console.log(getUser)

      res.status(200).json({
        status: true,
        data: getBlogs
      })

    } catch (error) {
      res.status(500).json({
        status: false,
        error: {
          message: 'An error occured'
        }
      })
    }

  },
  findOneBlog: async (req, res) => {

    try {

      const { id } = req.query

      const getBlogs = await BlogModel.find({ _id: id })
      res.status(200).json({
        status: true,
        data: getBlogs
      })

    } catch (error) {
      res.status(500).json({
        status: false,
        error: {
          message: 'An error occured'
        }
      })
    }

  },

  updateBlog: async (req, res) => {
    try {

      const { id, title, content, status } = req.body

      const updateBlog = await BlogModel.findAndUpdate(id, { title: title, content: content, status: status });
      res.status(200).json({
        status: true,
        data: updateBlog
      })

    } catch (error) {
      res.status(500).json({
        status: false,
        error: {
          message: error + 'An error occured while Updating'
        }
      })
    }
  }
}
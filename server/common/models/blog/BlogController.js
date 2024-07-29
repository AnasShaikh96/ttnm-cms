const BlogModel = require('./BlogModel')
const UserModel = require('../user/UserModel')


module.exports = {
  createBlog: async (req, res) => {

    try {

      const { title, content, status } = req.body;
      const { email } = req.user;


      if (!title || !content) {
        throw new Error('Title or Content is missing.')
      }

      const user = await UserModel.find({ email });
      if (!user) {
        throw new Error('User not found.');
      }

      const blog = await BlogModel.create({ title, content, status, createdBy: { id: user[0]._id } });

      await UserModel.update(user[0]._id, { $push: { createdBlogs: blog._id } });

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
      const { email } = req.user;
      const { sort_by, sort_type, page_num, page_size, search_key, } = req.query


      let offset = (page_num - 1) * page_size
      let sortObj = sort_by === undefined || sort_type === undefined ? {} : { [sort_by]: sort_type }
      let searchObj = search_key === undefined ? {} : { title: { $regex: search_key, $options: 'i' } }

      const getUser = await UserModel.find({ email });

      const getBlogs = await BlogModel.find({ '_id': { $in: getUser[0].createdBlogs }, ...searchObj }, sortObj, page_size, offset)
      const totalBlogs = await BlogModel.find({ '_id': { $in: getUser[0].createdBlogs }, ...searchObj })

      res.status(200).json({
        status: true,
        data: {
          results: {
            total_size: totalBlogs.length,
            last_page: Math.ceil(totalBlogs.length / page_size)
          },
          data: getBlogs

        }
      })

    } catch (error) {
      console.log(error)
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

      const updateBlog = await BlogModel.findAndUpdate(id, { title: title, content: content, status: status, updatedAt: new Date() });
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
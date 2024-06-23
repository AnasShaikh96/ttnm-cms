const BlogModel = require('./BlogModel')


module.exports = {
  createBlog: async (req, res) => {

    try {

      const { title, content } = req.body

      if (!title || !content) {
        throw new Error('Title or Content is missing.')
      }

      const blog = await BlogModel.create({ title, content });

      res.status(200).json({
        status: true,
        data: blog
      })


    } catch (error) {
      res.status(500).json({
        status: false,
        error: {
          message: error.message
        }
      })
    }

  }
}
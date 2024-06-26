const { createBlog, findAllBlogs, findOneBlog, updateBlog } = require('./BlogController')

const router = require('express').Router()


router.post('/create', createBlog)
router.get('/findAll', findAllBlogs)
router.get('/findOne', findOneBlog)
router.post('/update', updateBlog)

module.exports = router
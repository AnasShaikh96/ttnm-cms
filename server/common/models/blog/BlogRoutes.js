const { createBlog, findAllBlogs, findOneBlog } = require('./BlogController')

const router = require('express').Router()


router.post('/create', createBlog)
router.get('/findAll', findAllBlogs)
router.get('/findOne', findOneBlog)

module.exports = router
const { createBlog, findAllBlogs } = require('./BlogController')

const router = require('express').Router()


router.post('/create', createBlog)
router.get('/findAll', findAllBlogs)

module.exports = router
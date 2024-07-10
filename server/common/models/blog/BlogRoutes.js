const IsAuthenticated = require('../../middlewares/IsAuthenticated')
const { createBlog, findAllBlogs, findOneBlog, updateBlog } = require('./BlogController')

const router = require('express').Router()


router.post('/create', [IsAuthenticated.check], createBlog)
router.get('/findAll', [IsAuthenticated.check], findAllBlogs)
router.get('/findOne', [IsAuthenticated.check], findOneBlog)
router.post('/update', [IsAuthenticated.check], updateBlog)

module.exports = router
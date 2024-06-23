const { createBlog } = require('./BlogController')

const router = require('express').Router()


router.post('/create', createBlog)

module.exports = router
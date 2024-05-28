const AuthorizationController = require('./AuthorizationController');

const router = require('express').Router();

router.post('/register', AuthorizationController.register)

module.exports = router
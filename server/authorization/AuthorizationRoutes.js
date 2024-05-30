const AuthorizationController = require('./AuthorizationController');

const router = require('express').Router();

router.post('/register', AuthorizationController.register)
router.post('/login', AuthorizationController.login)
router.post('/reset-password', AuthorizationController.reset)

module.exports = router
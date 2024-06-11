const AuthorizationController = require('./AuthorizationController');
const { parse } = require('querystring')

// const router = require('express').Router();

const router = async (req, res) => {
  if (req.url === '/login' && req.method === 'POST') {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString()
    })
    req.on('end', () => {
      console.log(parse(body))
      // res.end('ok')
      req.body = parse(body);
      AuthorizationController.login(req, res)
    })
  }
}

// router.post('/register', AuthorizationController.register)
// router.post('/login', AuthorizationController.login)
// router.post('/reset-password', AuthorizationController.reset)

module.exports = router
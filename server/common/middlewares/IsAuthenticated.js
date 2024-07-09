const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../../config');

module.exports = {

  check: (req, res, next) => {

    try {

      const authHeaders = req.headers.authorization;

      if (!authHeaders) {
        throw new Error('Authorization Headers Not Found')
      }

      const splitAuthHeaders = authHeaders.split(" ")[1];

      if (!splitAuthHeaders) throw new Error('Authorization Token is Missing!')


      jwt.verify(splitAuthHeaders, jwtSecret, (err, user) => {

        if (err) {

          res.status(400).send({
            status: false,
            message: 'Invalid or Expired Token.'
          })

        } else {
          req.user = user;
          next()
        }
      })


    } catch (error) {

      res.status(500).send({
        status: false,
        error: {
          message: error.message
        }
      })

    }

  }


}
const UserModel = require('./../common/models/user/UserModel')
const jwt = require('jsonwebtoken')
const crypto = require('crypto');
const { jwtSecret } = require('../config');

const generateAccessToken = (email, password) => {
  const token = jwt.sign({ email, password }, jwtSecret, {
    expiresIn: 60 * 60
  })

  return token;
}

const encryptPassword = (password) => {
  const hash = crypto.createHash('sha256');
  hash.update(password)
  return hash.digest('hex')
}

module.exports = {

  register: async (req, res) => {
    try {


      const { firstName, lastName, email, password } = req.body

      if (!firstName || !lastName || !email || !password) {
        throw new Error('Data not passed')
      }

      const encryptedPassword = encryptPassword(password);
      const token = generateAccessToken(email, password)

      const user = await UserModel.create({ firstName, lastName, email, password: encryptedPassword });
      res.end(200).json({
        status: true,
        data: user,
        token
      })

    } catch (error) {

      console.log(error)


      // res.status(500).json({
      //   status: false,
      //   error: {
      //     message: error.message
      //   }
      // })

    }
  },

  login: async (req, res) => {

    try {
      const { email, password } = req.body;

      if (!email || !password) {
        throw new Error('Email or Password missing');
      }

      const encryptedPassword = encryptPassword(password)
      const token = generateAccessToken(email, password)
      const user = await UserModel.find({ email });

      // console.log('user', user)

      // res.status(200).json({
      //   status: true,
      //   data: user,
      //   token
      // })


      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.write(JSON.stringify({
        status: true,
        data: user,
        token
      }));

      res.end();

    } catch (error) {
      console.log(error)

      // res.status(500).json({
      //   status: false,
      //   error: {
      //     message: error.message
      //   }
      // })
    }


  },
  reset: async (req, res) => {

    try {
      const { email, password } = req.body;


      if (!email || !password) {
        throw new Error('Email not found')
      }

      const encryptedPassword = encryptPassword(password)

      const user = await UserModel.find({ email });
      const updateUser = await UserModel.update({ id: user.id }, { password: encryptedPassword })

      res.status(200).json({
        status: true,
        data: updateUser
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
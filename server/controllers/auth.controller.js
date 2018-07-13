import { User } from '../models/user'
// import bodyParer from 'body-parser'
import passport from 'passport'
import jwt from 'jsonwebtoken'
import Controller from '../system/controller'

class Auth extends Controller {
  async Login (req, res, next) {
    try {
      if (!req.body.email || !req.body.password) {
        return res.status(400).json({
          message: 'Something is not right with your input'
        })
      }
      passport.authenticate('local', {
        session: false
      }, (err, user, info) => {
        if (err || !user) {
          return res.status(400).json({
            message: info.message,
            user: user
          })
        }
        req.login(user, {
          session: false
        }, (err) => {
          if (err) {
            res.send(err)
          }
          // generate a signed son web token with the contents of user object and return it in the response
          const token = jwt.sign({
            id: user.id,
            email: user.username
          }, process.env.JWT_SECRET)
          return res.json({
            user: user.username,
            token
          })
        })
      })(req, res)
    } catch (error) {
      console.log(error)
    }
  }

  async Register (req, res) {
    try {
      User.register(new User({
        username: req.body.email
      }), req.body.password, function (err, account) {
        if (err) {
          return res.status(500).send('An error occurred: ' + err)
        }

        passport.authenticate(
          'local', {
            session: false
          })(req, res, () => {
          res.status(200).send('Successfully created new account')
        })
      })
    } catch (error) {
      return res.status(500).send('An error occurred: ' + error)
    }
  }
}

export default Auth

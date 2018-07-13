import passport from 'passport'
import { User } from '../models/user'
import { Strategy, ExtractJwt } from 'passport-jwt'
import { Strategy as LocalStrategy } from 'passport-local'
const JWTStrategy = Strategy
const ExtractJWT = ExtractJwt

const init = () => {
  passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
  }, User.authenticate()
  ))
  passport.serializeUser(User.serializeUser())
  passport.deserializeUser(User.deserializeUser())
  passport.use(new JWTStrategy({
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET
  },
  function (jwtPayload, cb) {
    // find the user in db if needed. This functionality may be omitted if you store everything you'll need in JWT payload.
    return User.findById(jwtPayload.id)
      .then(user => {
        return cb(null, user)
      })
      .catch(err => {
        return cb(err)
      })
  }
  ))
}

export default init

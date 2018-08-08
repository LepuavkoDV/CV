import passport from 'passport'
import { User } from '../models/user'
import { Strategy, ExtractJwt } from 'passport-jwt'
import { Strategy as LocalStrategy } from 'passport-local'
const JWTStrategy = Strategy
const ExtractJWT = ExtractJwt

class Auth {
  constructor () {
    passport.use(new LocalStrategy({
      usernameField: 'email',
      passwordField: 'password'
    }, User.authenticate()))
    passport.serializeUser(User.serializeUser())
    passport.deserializeUser(User.deserializeUser())
    passport.use(new JWTStrategy({
      jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.JWT_SECRET
    }, (jwtPayload, cb) => {
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
}

export default Auth

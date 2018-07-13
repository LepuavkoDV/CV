import express from 'express'
import Auth from '../../controllers/auth.controller'

const authentication = express.Router()

const AuthController = new Auth()

authentication.post('/register', (req, res) => {
  AuthController.Register(req, res)
})

authentication.post('/login', (req, res, next) => {
  AuthController.Login(req, res, next)
})

export default authentication

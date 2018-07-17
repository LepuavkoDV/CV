import express from 'express'
// import passport from 'passport'
import Sendmail from '../../../controllers/sendemail.controller'

const SendmailController = new Sendmail()
const messages = express.Router()

messages.post('/', (req, res) => {
  SendmailController.send(req, res)
})

export default messages

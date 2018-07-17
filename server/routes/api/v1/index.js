import express from 'express'
import groups from './groups'
import skills from './skills'
import myWorks from './myWorks'
import contents from './contents'
import messages from './messages'
import auth from './auth'

const api = express.Router()

api.use('/groups', groups)
api.use('/skills', skills)
api.use('/my-works', myWorks)
api.use('/contents', contents)
api.use('/messages', messages)
api.use('/auth', auth)

export default api

import express from 'express'
import passport from 'passport'
import Skills from '../../controllers/skills.controller'
import MyWorks from '../../controllers/myWorks.controller'
import Sendmail from '../../controllers/sendemail.controller'
import PageContent from '../../controllers/pageContent.controller'

const api = express.Router()

const SkillsController = new Skills()
const MyWorksController = new MyWorks()
const SendmailController = new Sendmail()
const PageContentsController = new PageContent()

// groups
api.get('/groups', (req, res) => {
  SkillsController.getList(req, res)
})

api.post('/group', passport.authenticate('jwt', { session: false }), (req, res) => {
  SkillsController.addGroup(req, res)
})

// skills
api.post('/skill', passport.authenticate('jwt', { session: false }), (req, res) => {
  SkillsController.addSkill(req, res)
})

// achievements
api.get('/my-works', (req, res) => {
  MyWorksController.getList(req, res)
})

api.post('/my-work', passport.authenticate('jwt', { session: false }), (req, res) => {
  MyWorksController.addMyWork(req, res)
})

// message
api.post('/message', (req, res) => {
  SendmailController.send(req, res)
})

// contents
api.get('/content/:page', (req, res) => {
  PageContentsController.getPageContent(req, res)
})

api.post('/content', passport.authenticate('jwt', { session: false }), (req, res) => {
  PageContentsController.addContent(req, res)
})

export default api

import express from 'express'
import passport from 'passport'
import Groups from '../../controllers/groups.controller'
import Skills from '../../controllers/skills.controller'
import MyWorks from '../../controllers/myWorks.controller'
import Sendmail from '../../controllers/sendemail.controller'
import PageContent from '../../controllers/pageContent.controller'

const api = express.Router()

const GroupsController = new Groups()
const SkillsController = new Skills()
const MyWorksController = new MyWorks()
const SendmailController = new Sendmail()
const PageContentsController = new PageContent()

// groups
api.get('/groups', (req, res) => {
  GroupsController.getList(req, res)
})

api.post('/group', passport.authenticate('jwt', { session: false }), (req, res) => {
  GroupsController.addGroup(req, res)
})

api.put('/group', passport.authenticate('jwt', { session: false }), (req, res) => {
  GroupsController.editGroup(req, res)
})

api.delete('/group/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
  GroupsController.removeGroup(req, res)
})

// skills
api.get('/skills', (req, res) => {
  SkillsController.getList(req, res)
})

api.post('/skill', passport.authenticate('jwt', { session: false }), (req, res) => {
  SkillsController.addSkill(req, res)
})

api.put('/skill', passport.authenticate('jwt', { session: false }), (req, res) => {
  SkillsController.editSkill(req, res)
})

api.delete('/skill/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
  SkillsController.removeSkill(req, res)
})

// my works
api.get('/my-works', (req, res) => {
  MyWorksController.getList(req, res)
})

api.post('/my-work', passport.authenticate('jwt', { session: false }), (req, res) => {
  MyWorksController.addMyWork(req, res)
})

api.put('/my-work', passport.authenticate('jwt', { session: false }), (req, res) => {
  MyWorksController.editMyWork(req, res)
})

api.delete('/my-work/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
  MyWorksController.removeMyWork(req, res)
})

// message
api.post('/message', (req, res) => {
  SendmailController.send(req, res)
})

// contents
api.get('/content/:page', (req, res) => {
  PageContentsController.getPageContent(req, res)
})

api.get('/contents', (req, res) => {
  PageContentsController.listPageContents(req, res)
})

api.post('/content', passport.authenticate('jwt', { session: false }), (req, res) => {
  PageContentsController.addContent(req, res)
})

api.put('/content', passport.authenticate('jwt', { session: false }), (req, res) => {
  PageContentsController.editContent(req, res)
})

api.delete('/content/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
  PageContentsController.removeContent(req, res)
})

export default api

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
  SkillsController.getList().then(data => {
    res.send(data)
  })
})

api.post('/group', passport.authenticate('jwt', { session: false }), (req, res) => {
  SkillsController.addGroup(req.body).then(data => {
    res.status(201).send(data)
  })
})

// skills
api.post('/skill', passport.authenticate('jwt', { session: false }), (req, res) => {
  SkillsController.addSkill(req.body).then(data => {
    res.status(201).send(data)
  })
})

// achievements
api.get('/my-works', (req, res) => {
  MyWorksController.getList().then(data => {
    res.send(data)
  })
})

api.post('/my-work', passport.authenticate('jwt', { session: false }), (req, res) => {
  MyWorksController.addMyWork(req.body).then(data => {
    res.status(201).send(data)
  })
})

// message
api.post('/message', (req, res) => {
  SendmailController.send(req.body).then(data => {
    res.send(data)
  })
})

// contents
api.get('/content/:page', (req, res) => {
  PageContentsController.getPageContent(req.params.page).then(data => {
    res.send(data)
  })
})

api.post('/content', passport.authenticate('jwt', { session: false }), (req, res) => {
  PageContentsController.addContent(req.body).then(data => {
    res.status(201).send(data)
  })
})

export default api

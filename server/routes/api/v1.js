import express from 'express'
import Skills from '../../controllers/skills'
import MyWorks from '../../controllers/myWorks'
import Sendmail from '../../controllers/sendemail'

const api = express.Router()

const skills = new Skills()
const myWorks = new MyWorks()
const sendmail = new Sendmail()

// groups
api.get('/groups', (req, res) => {
  skills.getList().then(data => {
    res.send(data)
  })
})

api.post('/group', (req, res) => {
  skills.addGroup(req.body).then(data => {
    res.status(201).send(data)
  })
})

// skills
api.post('/skill', (req, res) => {
  skills.addSkill(req.body).then(data => {
    res.status(201).send(data)
  })
})

// achievements
api.get('/my-works', (req, res) => {
  myWorks.getList().then(data => {
    res.send(data)
  })
})

api.post('/my-work', (req, res) => {
  myWorks.addMyWork(req.body).then(data => {
    res.status(201).send(data)
  })
})

// message
api.post('/message', (req, res) => {
  sendmail.send(req.body).then(data => {
    res.send(data)
  })
})

export default api

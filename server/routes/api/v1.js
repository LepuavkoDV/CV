import express from 'express'
import Skills from '../../controllers/skills'
import Achievements from '../../controllers/achievements'
import Sendmail from '../../controllers/sendemail'

const api = express.Router()

const skills = new Skills()
const achievements = new Achievements()
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
api.get('/achievements', (req, res) => {
  achievements.getList().then(data => {
    res.send(data)
  })
})

api.post('/achievement', (req, res) => {
  achievements.addAchievement(req.body).then(data => {
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

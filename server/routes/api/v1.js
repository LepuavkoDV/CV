import express from 'express'
import Skills from '../../controllers/skills'
import Achievements from '../../controllers/achievements'

const apiv1 = express.Router()

const skills = new Skills()
const achievements = new Achievements()

// groups
apiv1.get('/groups', (req, res) => {
  skills.getList().then(data => {
    res.send(data)
  })
})

apiv1.post('/group', (req, res) => {
  skills.addGroup(req.body).then(data => {
    res.status(201).send(data)
  })
})

// skills
apiv1.post('/skill', (req, res) => {
  skills.addSkill(req.body).then(data => {
    res.status(201).send(data)
  })
})

// achievements
apiv1.get('/achievements', (req, res) => {
  achievements.getList().then(data => {
    res.send(data)
  })
})

apiv1.post('/achievement', (req, res) => {
  achievements.addAchievement(req.body).then(data => {
    res.status(201).send(data)
  })
})

export default apiv1

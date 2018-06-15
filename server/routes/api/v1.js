import express from 'express'
import Skills from '../../controllers/skills'
// import Debug from 'debug'
let _skills = new Skills()

// const debug = Debug('api:*')
const v1 = express.Router()

v1.get('/groups', (req, res) => {
  _skills.getFullList().then(data => {
    res.send(data)
  })
})

v1.post('/group', (req, res) => {
  _skills.addGroup(req.body).then(data => {
    res.status(201).send(data)
  })
})

v1.post('/skill', (req, res) => {
  _skills.addSkill(req.body).then(data => {
    res.status(201).send(data)
  })
})

export default v1

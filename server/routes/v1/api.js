import express from 'express'
import Skills from '../../controllers/skills'
// import Debug from 'debug'
let _skills = new Skills()

// const debug = Debug('api:*')
const apiv1 = express.Router()

apiv1.get('/groups', (req, res) => {
  _skills.getFullList().then(data => res.send(data))
})

apiv1.post('/group', (req, res) => {
  _skills.addGroup(req.body).then(data => {
    res.status(201).send()
  })
})

export default apiv1

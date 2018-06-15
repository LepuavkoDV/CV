import express from 'express'
import Skills from '../../controllers/skills'
let s = new Skills()

const apiv1 = express.Router()

apiv1.get('/groups', (req, res) => {
  s.getFullList().then(data => res.send(data))
})

export default apiv1

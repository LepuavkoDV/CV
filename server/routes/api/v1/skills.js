import express from 'express'
import passport from 'passport'
import Skills from '../../../controllers/skills.controller'

const SkillsController = new Skills()
const skills = express.Router()

skills.get('/', (req, res) => {
  SkillsController.getList(req, res)
})

skills.post('/', passport.authenticate('jwt', { session: false }), (req, res) => {
  SkillsController.addSkill(req, res)
})

skills.put('/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
  SkillsController.editSkill(req, res)
})

skills.delete('/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
  SkillsController.removeSkill(req, res)
})

export default skills

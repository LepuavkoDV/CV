import mongoose from 'mongoose'
import Controller from './controller'
import '../models/skills'

const Group = mongoose.model('skill_group')
const Skill = mongoose.model('skill')

class Skills extends Controller {
  getSkills () {
    return Skill.find()
  }
  getFullList () {
    return Group.find()
  }
}

export default Skills

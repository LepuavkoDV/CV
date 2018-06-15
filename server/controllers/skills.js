import mongoose from 'mongoose'
import Controller from './controller'
import '../models/skills'

const Group = mongoose.model('skill_group')
const Skill = mongoose.model('skills')

class Skills extends Controller {
  getFullList () {
    return Group.find().populate('items')
  }
  addSkill (data) {

  }
}

export default Skills

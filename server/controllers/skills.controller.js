import Controller from '../system/controller'
import { Group, Skill } from '../models/skills'

class Skills extends Controller {
  async getList (req, res) {
    try {
      let list = await Group.find().populate('items')
      res.status(200).send(list)
    } catch (error) {
      res.status(500).send(error)
    }
  }
  async addSkill (req, res) {
    try {
      let data = req.body
      const skill = new Skill({
        title: data.title,
        value: data.value,
        group: data.group,
        createdAt: new Date()
      })

      let item = await skill.save()
      res.status(201).send(item)
    } catch (error) {
      res.status(500).send(error)
    }
  }
  async addGroup (req, res) {
    try {
      let data = req.body
      const group = new Group({
        title: data.title,
        icon: data.icon,
        createdAt: new Date()
      })

      let item = await group.save()
      res.status(201).send(item)
    } catch (error) {
      res.status(500).send(error)
    }
  }
}

export default Skills

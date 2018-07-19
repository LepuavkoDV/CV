import Controller from '../system/controller'
import { Skill } from '../models/skills'

class Skills extends Controller {
  async getList (req, res) {
    try {
      let list = await Skill.find().populate('group')
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
  async editSkill (req, res) {
    try {
      let data = req.body
      Skill.findByIdAndUpdate(req.params.id, {
        $set: {
          title: data.title,
          value: data.value
        }
      }, {
        new: true
      }, (err, skill) => {
        if (err) {
          res.status(500).send(err)
        }
        res.status(200).send(skill)
      })
    } catch (error) {
      res.status(500).send(error)
    }
  }
  async removeSkill (req, res) {
    try {
      Skill.findByIdAndRemove(req.params.id, (result) => {
        res.status(204).send({})
      })
    } catch (error) {
      res.status(500).send(error)
    }
  }
}

export default Skills

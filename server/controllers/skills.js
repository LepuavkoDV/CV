import Controller from '../system/controller'
import { Group, Skill } from '../models/skills'

class Skills extends Controller {
  getList () {
    return Group.find().populate('items')
  }
  addSkill (data) {
    const skill = new Skill({
      title: data.title,
      value: data.value,
      group: data.group,
      createdAt: new Date()
    })

    return skill.save()
  }
  addGroup (data) {
    const group = new Group({
      title: data.title,
      icon: data.icon,
      createdAt: new Date()
    })

    return group.save()
  }
}

export default Skills

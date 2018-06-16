import Controller from '../system/controller'
import Achievement from '../models/achievements'

class Achievements extends Controller {
  getList () {
    return Achievement.find()
  }

  addAchievement (data) {
    const achievement = new Achievement({
      title: data.title,
      text: data.text,
      createdAt: new Date()
    })
    return achievement.save()
  }
}

export default Achievements

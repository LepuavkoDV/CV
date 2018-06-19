import Controller from '../system/controller'
import { MyWork } from '../models/myWorks'

class MyWorks extends Controller {
  getList () {
    return MyWork.find()
  }

  addMyWork (data) {
    const myWork = new MyWork({
      title: data.title,
      position: data.position,
      period: data.period,
      text: data.text,
      createdAt: new Date()
    })
    return myWork.save()
  }
}

export default MyWorks

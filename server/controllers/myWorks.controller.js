import Controller from '../system/controller'
import { MyWork } from '../models/myWorks'

class MyWorks extends Controller {
  async getList (req, res) {
    try {
      let list = await MyWork.find()
      res.status(200).send(list)
    } catch (error) {
      res.status(500).send(error)
    }
  }

  async addMyWork (req, res) {
    try {
      let data = req.body
      const myWork = new MyWork({
        title: data.title,
        position: data.position,
        period: data.period,
        text: data.text,
        createdAt: new Date()
      })

      let item = await myWork.save()
      res.status(201).send(item)
    } catch (error) {
      res.status(500).send(error)
    }
  }

  async editMyWork (req, res) {
    try {
      let data = req.body
      MyWork.findByIdAndUpdate(req.params.id, {
        $set: {
          title: data.title,
          position: data.position,
          period: data.period,
          text: data.text
        }
      }, {
        new: true
      }, (err, mywork) => {
        if (err) {
          res.status(500).send(err)
        }
        res.status(200).send(mywork)
      })
    } catch (error) {
      res.status(500).send(error)
    }
  }

  async removeMyWork (req, res) {
    try {
      MyWork.findByIdAndRemove(req.params.id, (result) => {
        res.status(200).send({})
      })
    } catch (error) {
      res.status(500).send(error)
    }
  }
}

export default MyWorks

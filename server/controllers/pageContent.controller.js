import Controller from '../system/controller'
import { Content } from '../models/content'

class PageContent extends Controller {
  async getPageContent (req, res) {
    try {
      let page = req.params.page
      let content = await Content.find({ page: page })
      res.status(200).send(content)
    } catch (error) {
      res.status(500).send(error)
    }
  }
  async addContent (req, res) {
    try {
      let data = req.body
      const content = new Content({
        page: data.page,
        section: data.section,
        content: data.content,
        createdAt: new Date()
      })
      let item = await content.save()
      res.status(201).send(item)
    } catch (error) {
      res.status(500).send(error)
    }
  }
}

export default PageContent

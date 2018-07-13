import Controller from '../system/controller'
import { Content } from '../models/content'

class PageContent extends Controller {
  getPageContent (page) {
    return Content.find({ page: page })
  }
  addContent (data) {
    const content = new Content({
      page: data.page,
      section: data.section,
      content: data.content,
      createdAt: new Date()
    })
    return content.save()
  }
}

export default PageContent

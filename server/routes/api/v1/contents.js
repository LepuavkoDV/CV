import express from 'express'
import passport from 'passport'
import PageContent from '../../../controllers/pageContent.controller'

const PageContentsController = new PageContent()
const contents = express.Router()

contents.get('/', (req, res) => {
  PageContentsController.listPageContents(req, res)
})

contents.get('/:page', (req, res) => {
  PageContentsController.getPageContent(req, res)
})

contents.post('/', passport.authenticate('jwt', { session: false }), (req, res) => {
  PageContentsController.addContent(req, res)
})

contents.put('/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
  PageContentsController.editContent(req, res)
})

contents.delete('/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
  PageContentsController.removeContent(req, res)
})

export default contents

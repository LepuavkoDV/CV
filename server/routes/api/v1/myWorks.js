import express from 'express'
import passport from 'passport'
import MyWorks from '../../../controllers/myWorks.controller'

const MyWorksController = new MyWorks()
const myWorks = express.Router()

myWorks.get('/', (req, res) => {
  MyWorksController.getList(req, res)
})

myWorks.post('/', passport.authenticate('jwt', { session: false }), (req, res) => {
  MyWorksController.addMyWork(req, res)
})

myWorks.put('/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
  MyWorksController.editMyWork(req, res)
})

myWorks.delete('/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
  MyWorksController.removeMyWork(req, res)
})

export default myWorks

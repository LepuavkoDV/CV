import express from 'express'
import passport from 'passport'
import Groups from '../../../controllers/groups.controller'

const GroupsController = new Groups()
const groups = express.Router()

groups.get('/', (req, res) => {
  GroupsController.getList(req, res)
})

groups.post('/', passport.authenticate('jwt', { session: false }), (req, res) => {
  GroupsController.addGroup(req, res)
})

groups.put('/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
  GroupsController.editGroup(req, res)
})

groups.delete('/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
  GroupsController.removeGroup(req, res)
})

export default groups

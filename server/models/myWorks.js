import mongoose from 'mongoose'

const Schema = mongoose.Schema

const MyWorkSchema = new Schema({
  title: { type: String },
  position: {type: String},
  period: { type: String },
  text: { type: String },
  createdAt: { type: Date }
})

/* eslint-disable no-unused-vars */
export const MyWork = mongoose.model('MyWork', MyWorkSchema)

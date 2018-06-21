import mongoose from 'mongoose'

const Schema = mongoose.Schema

const ContentSchema = new Schema({
  page: { type: String },
  section: { type: String },
  content: { type: String },
  createdAt: { type: Date }
})

/* esling-disable no-unused-vars */
export const Content = mongoose.model('Content', ContentSchema)

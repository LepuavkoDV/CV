import mongoose from 'mongoose'

const Schema = mongoose.Schema

const AchievementSchema = new Schema({
  title: { type: String },
  position: {type: String},
  period: { type: String },
  text: { type: String },
  createdAt: { type: Date }
})

/* eslint-disable no-unused-vars */
export const Achievement = mongoose.model('Achievement', AchievementSchema)

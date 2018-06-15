import mongoose from 'mongoose'

const Schema = mongoose.Schema

const GroupSchema = new Schema({
  title: { type: String },
  icon: { type: String, required: true },
  items: [{ type: Schema.ObjectId, ref: 'Skill' }],
  createdAt: { type: Date }
})

const SkillSchema = new Schema({
  title: { type: String },
  value: { type: Number },
  createdAt: { type: Date }
})

/* eslint-disable no-unused-vars */
const Group = mongoose.model('skill_group', GroupSchema)
const Skill = mongoose.model('skill', SkillSchema)

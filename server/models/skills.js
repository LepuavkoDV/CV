import mongoose from 'mongoose'
import relationship from 'mongoose-relationship'

const Schema = mongoose.Schema

const GroupSchema = new Schema({
  title: { type: String },
  icon: { type: String, required: true },
  items: [{ type: Schema.Types.ObjectId, ref: 'Skill' }],
  createdAt: { type: Date }
})

const SkillSchema = new Schema({
  title: { type: String },
  value: { type: Number },
  group: { type: Schema.Types.ObjectId, ref: 'Group', childPath: 'items' },
  createdAt: { type: Date }
})

SkillSchema.plugin(relationship, { relationshipPathName: 'group' })

/* eslint-disable no-unused-vars */
export const Group = mongoose.model('Group', GroupSchema)
export const Skill = mongoose.model('Skill', SkillSchema)

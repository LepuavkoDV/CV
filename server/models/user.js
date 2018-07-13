import mongoose from 'mongoose'
import passportLocalMongoose from 'passport-local-mongoose'

const Schema = mongoose.Schema

const UserSchema = new Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  createdAt: { type: Date }
})

UserSchema.plugin(passportLocalMongoose)

export const User = mongoose.model('User', UserSchema)

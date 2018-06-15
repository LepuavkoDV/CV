import mongoose from 'mongoose'
import config from '../etc/config'

export function connect () {
  mongoose.connect(`mongodb://${config.db.user}:${config.db.password}@${config.db.host}:${config.db.port}/${config.db.name}`)
}

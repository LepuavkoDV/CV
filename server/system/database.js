import mongoose from 'mongoose'

class Database {
  constructor () {
    this.user = process.env.DB_USER
    this.password = process.env.DB_PASSWORD
    this.host = process.env.DB_HOST
    this.port = process.env.DB_PORT
    this.dbName = process.env.DB_NAME
  }

  async connect () {
    // const result = await mongoose.connect(`mongodb://${this.user}:${this.password}@${this.host}:${this.port}/${this.dbName}`)
    // const result = await mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@ldvcv.evxiw.gcp.mongodb.net/ldvcv?retryWrites=true&w=majority`)
    const result = await mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@ldvcv.evxiw.gcp.mongodb.net/ldvcv?retryWrites=true&w=majority`)
    return result
  }
}

export default Database

import mongoose from 'mongoose'

let connectionConfig = {
  useNewUrlParser: true,
  useUnifiedTopology: true
}

mongoose.set('strictQuery', true)

mongoose.connect('mongodb://127.0.0.1:27017/characters', connectionConfig)

mongoose.connection.on('connected', () => console.log("Connected to database"))
mongoose.connection.on('disconnected', () => console.log("Disconnected from database"))
mongoose.connection.on('error', error => console.error("Database error", error))


export default mongoose.connection
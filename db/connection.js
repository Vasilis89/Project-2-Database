import mongoose from 'mongoose';

mongoose.set('returnOriginal', false)
mongoose.set('strictQuery', false);

const url = process.env.MONGO_URL || 'mongodb://127.0.0.1:27017/project_two'

mongoose.connect(url).catch((err) => {
  console.log(`Error connection to mongodb: ${err.message}`)
});

mongoose.connection.on("disconnected", () => {
  console.log(`Disconnected from MongoDB!`)
});
  
mongoose.connection.on("error", (err) => {
   console.log(`MongoDB connection error: ${err}`)
});
  

export default mongoose.connection
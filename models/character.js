import mongoose from "mongoose";
const Schema = mongoose.Schema;

let Character = new Schema({
  _id: Number,
  name: String,
  status: String,
  species: String,
  type: String,
  gender: String,
  origin: {
    name: String,
    url: String,
  },
  location: {
    name: String,
    url: String
  },
  image: String,
  episode: [{ type: String }],
  url: String,
  created: String
})

export default mongoose.model("character", Character);
import mongoose from "mongoose";

const filmSchema = new mongoose.Schema({
  title: String,
  director: String,
  duration: Number,
  rate: Number,
  release_date: Date,
  poster_url: String,
  description: String,
  genre: [{ type: mongoose.Schema.Types.ObjectId, ref: "Genre" }],
});

const Film = mongoose.model("Film", filmSchema, "Films");

export default Film;

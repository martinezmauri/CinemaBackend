import mongoose from "mongoose";

const genreSchema = new mongoose.Schema({
  name: String,
});

const genre = mongoose.model("Genre", genreSchema, "Genres");

export default genre;

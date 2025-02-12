import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  password: String,
  email: String,
  img_profile: String,
  role: { type: String, enum: ["admin", "user"], default: "user" },
  favorites: [{ type: mongoose.Schema.Types.ObjectId, ref: "Film" }],
});

const User = mongoose.model("User", userSchema, "Users");

export default User;

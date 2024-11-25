import mongoose from "mongoose";
import role from "../enum/role";

const userSchema = new mongoose.Schema({
  name: String,
  password: String,
  email: String,
  img_profile: String,
  role: role,
  favorites: [{ type: mongoose.Schema.Types.ObjectId, ref: "Film" }],
});

const User = mongoose.model("User", userSchema);

export default User;

import mongoose from "mongoose";

const userFavoritesSchema = mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  film_id: { type: mongoose.Schema.Types.ObjectId, ref: "Film" },
});

const UserFavorites = mongoose.model("UserFavorites", userFavoritesSchema);

export default UserFavorites;

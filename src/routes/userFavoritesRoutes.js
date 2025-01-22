import express from "express";
import UserFavoritesController from "../controllers/UserFavoritesController.js";

const userFavoritesRouter = express.Router();
const userFavoritesController = new UserFavoritesController();

userFavoritesRouter.get("/:userId", userFavoritesController.findAll);
userFavoritesRouter.post("/", userFavoritesController.addFavorite);
userFavoritesRouter.delete("/", userFavoritesController.removeFavorite);

export default userFavoritesRouter;

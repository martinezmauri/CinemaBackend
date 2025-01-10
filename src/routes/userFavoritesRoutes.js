import express from "express";
import UserFavoritesController from "../controllers/UserFavoritesController";

const userFavoritesRouter = express.Router();
const userFavoritesController = new UserFavoritesController();

router.get("/:userId", userFavoritesController.findAll);
router.post("/", userFavoritesController.addFavorite);
router.delete("/", userFavoritesController.removeFavorite);

export default userFavoritesRouter;

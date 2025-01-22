import { Router } from "express";
import GenreController from "../controllers/GenreController.js";
import ValidationGenre from "../middlewares/ValidationGenre.js";

const genreRouter = Router();
const genreController = new GenreController();

genreRouter.get("/", genreController.findAll);
genreRouter.get(
  "/list",
  ValidationGenre.ValidationId,
  genreController.findByIds
);
genreRouter.post(
  "/create",
  ValidationGenre.ValidationCreate,
  genreController.create
);
genreRouter.post(
  "/delete",
  ValidationGenre.ValidationDelete,
  genreController.delete
);

export default genreRouter;

import { Router } from "express";
import FilmController from "../controllers/FilmController.js";
import ValidationFilm from "../middlewares/ValidationFilm.js";

const filmRouter = Router();
const filmController = new FilmController();

filmRouter.get("/", filmController.findAll);
filmRouter.get("/:id", ValidationFilm.validationId, filmController.findById);
filmRouter.post(
  "/create",
  ValidationFilm.validationCreate,
  filmController.create
);
filmRouter.post(
  "/update",
  ValidationFilm.ValidationUpdate,
  filmController.update
);
filmRouter.post(
  "/delete",
  ValidationFilm.validationDelete,
  filmController.delete
);

export default filmRouter;

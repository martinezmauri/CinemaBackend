import { Router } from "express";
import FilmController from "../controllers/FilmController.js";
import ValidationFilm from "../middlewares/ValidationFilm.js";

const filmRouter = Router();
const filmController = new FilmController();

// falta testear create,update,delete
filmRouter.get("/", filmController.findAll);
filmRouter.get("/:id", filmController.findById);
filmRouter.post(
  "/create",
  ValidationFilm.validationCreate,
  filmController.create
);
filmRouter.post("/update", filmController.update);
filmRouter.post("/delete", filmController.delete);

export default filmRouter;

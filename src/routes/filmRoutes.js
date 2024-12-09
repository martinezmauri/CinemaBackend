import { Router } from "express";
import FilmController from "../controllers/FilmController.js";

const filmRouter = Router();
const filmController = new FilmController();

filmRouter.get("/", filmController.findAll);
filmRouter.get(":id", filmController.findById);
filmRouter.post("/create", filmController.create);
filmRouter.post("/update", filmController.update);
filmRouter.post("/delete", filmController.delete);

export default filmRouter;

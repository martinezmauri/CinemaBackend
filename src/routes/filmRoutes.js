import { Router } from "express";
import FilmController from "../controllers/FilmController.js";

const filmRouter = Router();
const filmController = new FilmController();

export default filmRouter;

import { Router } from "express";
import GenreController from "../controllers/GenreController";

const genreRouter = Router();
const genreController = new GenreController();

genreRouter.get("/", genreController.findAll);
genreRouter.get("/find", genreController.findByIds);
genreRouter.post("create", genreController.create);
genreRouter.post("delete", genreController.delete);

export default genreRouter;

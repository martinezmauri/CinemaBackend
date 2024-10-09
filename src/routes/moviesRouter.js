const { Router } = require("express");
const validateMovie = require("../middlewares/index");
const movieController = require("../controllers/movieController");
const movieRouter = Router();

movieRouter.get("/movies", movieController.getAllMovies);

movieRouter.post("/movies", validateMovie, movieController.createMovie);

module.exports = movieRouter;

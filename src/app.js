import express from "express";
import router from "./routes/indexRoutes.js";
import GlobalMiddleware from "./middlewares/GlobalMiddleware.js";
import FilmRepository from "./repository/FilmRepository.js";
import { readFile } from "fs/promises";
import cors from "cors";

const loadMovies = async () => {
  const data = await readFile(
    new URL("./helpers/movies.json", import.meta.url)
  );
  return JSON.parse(data);
};

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
    this.seedDatabase();
  }

  async seedDatabase() {
    try {
      const movies = await loadMovies();
      const filmRepo = new FilmRepository();
      filmRepo.seederFilm(movies);
      console.log("Películas cargadas en la base de datos.");
    } catch (error) {
      console.error("Error al cargar las películas:", error);
    }
  }

  middlewares() {
    this.app.use(express.json());
    this.app.use(cors());
    this.app.use(GlobalMiddleware.logEndpoint);
  }

  routes() {
    this.app.use("/api", router);
  }

  listen(port) {
    this.app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  }
}
export default App;

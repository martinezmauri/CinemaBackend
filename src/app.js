import express from "express";
import router from "./routes/indexRoutes.js";
import GlobalMiddleware from "./middlewares/GlobalMiddleware.js";
import seedDatabase from "./helpers/seeder.js";
import cors from "cors";

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
    this.loadInitialData();
  }

  async loadInitialData() {
    try {
      await seedDatabase();
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

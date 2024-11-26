import express from "express";
import router from "./routes/indexRoutes.js";
class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.json());
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

import App from "./app.js";
import conDb from "./config/database.js";

conDb()
  .then((res) => {
    const PORT = process.env.PORT;
    const server = new App();
    server.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Error en la conexion a la BDD", err);
  });

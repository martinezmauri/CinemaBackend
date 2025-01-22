import App from "./app.js";
import cloudinaryConfig from "./config/cloud.js";
import conDb from "./config/database.js";

conDb()
  .then((res) => {
    const PORT = process.env.PORT;
    cloudinaryConfig();
    const server = new App();
    server.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Error en la conexion a la BDD", err);
  });

/* 
    Parcialmente listos: Auth - User - Film - Genre
    A Trabajar: UserFavorites - Crear clase para errores (NotFoundError,BadRequest,etc) - Middlewares
   */

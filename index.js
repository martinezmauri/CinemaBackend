const app = require("./src/server");
const conDb = require("./src/config/conDb");

conDb()
  .then((res) => {
    const PORT = 3000;
    app.listen(PORT, () => {
      console.log(`Servidor escuchando en el puerto ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("Error en la conexion a la BDD", err);
  });

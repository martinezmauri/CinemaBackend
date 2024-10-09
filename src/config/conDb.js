const mongoose = require("mongoose");
require("dotenv").config();
const conDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Conexión a la BDD exitosa");
  } catch (error) {
    console.error("Error conectando a la BDD:", error);
    throw error;
  }
};

module.exports = conDb;

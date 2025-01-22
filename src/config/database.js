import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config({ path: ".env" });

const conDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Conexion a la BDD exitosa");
  } catch (error) {
    console.error("Error conectando a la BDD", error);
    throw error;
  }
};

export default conDb;

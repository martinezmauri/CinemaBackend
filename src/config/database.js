import mongoose from "mongoose";

const conDb = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://maurimartinez1316:42422371@cinema-cluster.k3jrk.mongodb.net/"
    );
    console.log("Conexion a la BDD exitosa");
  } catch (error) {
    console.error("Error conectando a la BDD", error);
    throw error;
  }
};

export default conDb;

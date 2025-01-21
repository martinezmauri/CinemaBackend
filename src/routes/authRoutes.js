import { Router } from "express";
import AuthController from "../controllers/AuthController.js";
import ValidationAuth from "../middlewares/ValidationAuth.js";

const authRouter = Router();
const authController = new AuthController();

authRouter.post(
  "/register",
  ValidationAuth.validationDataRegister,
  authController.register
);
authRouter.post(
  "/login",
  ValidationAuth.validationDataLogin,
  authController.login
);

export default authRouter;

/* 
-Necesitamos un middleware para verificar el token
-Otro middelware para los post y validar que los campos sean obligatorios
-Otro middleware para proteger las rutas teniendo en cuenta los roles del user
*/

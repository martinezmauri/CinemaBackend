import { Router } from "express";
import UserController from "../controllers/UserController.js";

const userRouter = Router();
const userController = new UserController();

userRouter.get("/", userController.findAll);
userRouter.get("/:id", userController.findById);
userRouter.post("/update", userController.update);

export default userRouter;

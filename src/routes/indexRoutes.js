import { Router } from "express";
import userRouter from "./userRoutes.js";
import authRouter from "./authRoutes.js";
import filmRouter from "./filmRoutes.js";
import genreRouter from "./genreRoutes.js";

const router = Router();

router.use("/users", userRouter);
router.use("/auth", authRouter);
router.use("/film", filmRouter);
router.use("/genre", genreRouter);

export default router;

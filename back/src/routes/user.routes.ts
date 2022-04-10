import { Router } from "express";
import { registerUserController } from "../controllers/user.controller";

const userRoutes = Router();

userRoutes.post("", registerUserController);

export default userRoutes;

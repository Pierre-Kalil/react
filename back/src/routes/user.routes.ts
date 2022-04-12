import { Router } from "express";
import {
  filterUserController,
  registerUserController,
} from "../controllers/user.controller";

const userRoutes = Router();

userRoutes.post("", registerUserController);
userRoutes.get("/:id", filterUserController);

export default userRoutes;

import { Router } from "express";
import userRoutes from "./user.routes";
import loginRoutes from "./login.routes";
import recordRoutes from "./record.routes";

const router = Router();

router.use("/user", userRoutes);
router.use("/login", loginRoutes);
router.use("/record", recordRoutes);

export default router;

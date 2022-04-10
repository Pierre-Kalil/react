import express from "express";
import dotenv from "dotenv";
import router from "./routes";
import cors from "cors";

dotenv.config({ path: ".env" });

const app = express();
app.use(cors());

app.use(express.json());
app.use(router);

export default app;

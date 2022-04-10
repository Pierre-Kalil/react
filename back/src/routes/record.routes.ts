import { Router } from "express";
import {
  createRecordController,
  listRecordsController,
  filterRecordController,
} from "../controllers/record.controller";

const recordRoutes = Router();

recordRoutes.post("", createRecordController);
recordRoutes.get("", listRecordsController);
recordRoutes.get("/:userId", filterRecordController);

export default recordRoutes;

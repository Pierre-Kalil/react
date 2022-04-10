import { Request, Response } from "express";
import {
  createRecordService,
  filterRecordService,
  listRecordsService,
} from "../services/record.service";

export const createRecordController = async (req: Request, res: Response) => {
  try {
    const record = await createRecordService(req.body);
    return res.status(201).send({ record: record });
  } catch (err: any) {
    return res.status(400).send({ message: err.message });
  }
};

export const listRecordsController = async (req: Request, res: Response) => {
  try {
    const records = await listRecordsService();
    return res.status(200).send({ record: records });
  } catch (err: any) {
    return res.status(400).send({ message: "ist records" });
  }
};

export const filterRecordController = async (req: Request, res: Response) => {
  try {
    const record = await filterRecordService(req.params as any);
    return res.status(200).send(record);
  } catch (err) {
    return res.status(400).send({ message: "Record not found" });
  }
};

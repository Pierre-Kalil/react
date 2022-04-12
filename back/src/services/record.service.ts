import { RecordModel } from "../models/record.model";
import { v4 as uuidv4 } from "uuid";
import { DataRecordProps } from "./types";
import ErrorHandler from "../Errors/errors";

export const createRecordService = async (data: DataRecordProps) => {
  data["id"] = uuidv4();
  const record = await RecordModel.create(data);
  return record;
};

export const listRecordsService = async () => {
  const records = await RecordModel.find();
  return records;
};

export const filterRecordService = async (userId: any) => {
  const record = await RecordModel.find({ userId: userId["userId"] });
  if (!record) {
    throw new ErrorHandler("Record not found", 400);
  }
  return record;
};

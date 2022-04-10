import mongoose from "mongoose";
const { Schema } = mongoose;

const recordSchema = new Schema({
  id: String,
  userId: String,
  subject: { problem: [], situation: Boolean, comments: String },
  object: { problem: [], situation: Boolean, comments: String },
  assessment: { problem: [], situation: Boolean, comments: String },
  plan: { problem: [], situation: Boolean, comments: String },
});

export const RecordModel = mongoose.model("Record", recordSchema);

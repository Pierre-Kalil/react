import mongoose from "mongoose";

export const ConnectDatabase = async () => {
  await mongoose
    .connect(`${process.env.DATABASE_LOCAL}`)
    .then(() => {
      console.log("Connect in mongoDB");
    })
    .catch((e) => {
      console.log(e);
    });
};

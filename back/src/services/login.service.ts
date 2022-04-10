import { UserModel } from "../models/user.model";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import ErrorHandler from "../Errors/errors";
import { DataLoginProps } from "./types";

export const loginService = async (data: DataLoginProps) => {
  const { email, password } = data;
  const user = await UserModel.findOne({ email });
  if (!user) {
    throw new ErrorHandler("not found user!", 404);
  }
  if (!(await bcrypt.compareSync(password, user.password))) {
    throw new ErrorHandler("Invalid password!", 409);
  }
  const token = jwt.sign(
    { id: user.id, email: user.email, name: user.name },
    process.env.SECRET as string,
    {
      expiresIn: "1d",
    }
  );
  return token;
};

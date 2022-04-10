import { Request, Response } from "express";
import { loginService } from "../services/login.service";

export const loginController = async (req: Request, res: Response) => {
  try {
    const token = await loginService(req.body);
    res.send({ token });
  } catch (err: any) {
    return res.status(400).send({ message: err.message });
  }
};

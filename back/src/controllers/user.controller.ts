import { Request, Response } from "express";
import { createUserService } from "../services/user.service";

export const registerUserController = async (req: Request, res: Response) => {
  try {
    const user = await createUserService(req.body);
    return res.status(201).send({
      id: user.id,
      name: user.name,
      email: user.email,
      password: user.password,
    });
  } catch (err: any) {
    return res.status(400).json({ error: err.message });
  }
};

import { Request, Response } from "express";
import { createUserService, filterUserService } from "../services/user.service";

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

export const filterUserController = async (req: Request, res: Response) => {
  try {
    const user = await filterUserService(req.params.id);
    return res.status(200).send({
      id: user.id,
      name: user.name,
      email: user.email,
      password: user.password,
    });
  } catch (err: any) {
    return res.status(400).json({ error: err.message });
  }
};

import { Request, Response } from 'express';
import { CreateUserDto, User } from '../types/user';
import { createUserService, getUsersService, getUserByIdService } from '../services/user.service';

export const createUser = async (req: Request<unknown, unknown, CreateUserDto>, res: Response): Promise<void> => {
  const userData = req.body;
  const user = await createUserService(userData);
  res.status(201).json(user);
};

export const getUsers = async (_req: Request, res: Response<User[]>): Promise<void> => {
  const users = await getUsersService();
  res.json(users);
};

export const getUserById = async (req: Request<{ id: string }>, res: Response<User>): Promise<void> => {
  const { id } = req.params;
  const user = await getUserByIdService(id);
  res.json(user);
};
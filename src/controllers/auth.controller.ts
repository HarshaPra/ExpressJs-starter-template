import { Request, Response } from 'express';
import { LoginDto, LoginResponse } from '../types/auth';
import { loginService } from '../services/auth.service';

export const login = async (
  req: Request<unknown, unknown, LoginDto>,
  res: Response<LoginResponse>
): Promise<void> => {
  try {
    const loginData = req.body;
    const result = await loginService(loginData);
    res.json(result);
  } catch (error) {
    if (error instanceof Error) {
      res.status(401).json({
        message: error.message
      } as any);
    } else {
      res.status(500).json({
        message: 'Internal server error'
      } as any);
    }
  }
};
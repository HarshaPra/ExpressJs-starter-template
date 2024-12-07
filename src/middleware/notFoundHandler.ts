import { Request, Response } from 'express';

export const notFoundHandler = (_req: Request, res: Response): void => {
  res.status(404).json({
    status: 404,
    message: 'Resource not found'
  });
};
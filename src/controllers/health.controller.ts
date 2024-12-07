import { Request, Response } from 'express';
import { HealthResponse } from '../types/health';

export const getHealthStatus = (_req: Request, res: Response<HealthResponse>): void => {
  res.json({
    status: 'ok',
    timestamp: new Date().toISOString()
  });
};
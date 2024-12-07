import { Router } from 'express';
import { userRoutes } from './user.routes';
import { healthRoutes } from './health.routes';
import { authRoutes } from './auth.routes';

const router = Router();

router.use('/users', userRoutes);
router.use('/health', healthRoutes);
router.use('/auth', authRoutes);

export const apiRoutes = router;
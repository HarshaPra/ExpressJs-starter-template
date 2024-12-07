import { Router } from 'express';
import { login } from '../controllers/auth.controller';
import { validateLogin } from '../middleware/validators/authValidator';

const router = Router();

router.post('/login', validateLogin, login);

export const authRoutes = router;
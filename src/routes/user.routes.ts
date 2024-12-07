import { Router } from 'express';
import { createUser, getUsers, getUserById } from '../controllers/user.controller';
import { validateCreateUser } from '../middleware/validators/userValidator';

const router = Router();

router.post('/', validateCreateUser, createUser);
router.get('/', getUsers);
router.get('/:id', getUserById);

export const userRoutes = router;
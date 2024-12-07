import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { LoginDto, LoginResponse } from '../types/auth';
import { getUserByEmailService } from './user.service';
import { config } from '../config';

export const loginService = async (loginData: LoginDto): Promise<LoginResponse> => {
  const user = await getUserByEmailService(loginData.email);
  
  if (!user) {
    throw new Error('Invalid credentials');
  }

  const isPasswordValid = await bcrypt.compare(loginData.password, user.password);
  
  if (!isPasswordValid) {
    throw new Error('Invalid credentials');
  }

  const token = jwt.sign(
    { userId: user.id, email: user.email },
    config.jwtSecret,
    { expiresIn: config.jwtExpiresIn }
  );

  return {
    token,
    user: {
      id: user.id,
      email: user.email,
      name: user.name
    }
  };
};
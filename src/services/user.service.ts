import bcrypt from 'bcryptjs';
import { CreateUserDto, User } from '../types/user';

// Simulated database
const users: User[] = [];

export const createUserService = async (userData: CreateUserDto): Promise<User> => {
  const existingUser = await getUserByEmailService(userData.email);
  if (existingUser) {
    throw new Error('Email already exists');
  }

  const hashedPassword = await bcrypt.hash(userData.password, 10);
  
  const newUser: User = {
    id: (users.length + 1).toString(),
    ...userData,
    password: hashedPassword,
    createdAt: new Date().toISOString()
  };
  
  users.push(newUser);
  return newUser;
};

export const getUsersService = async (): Promise<User[]> => {
  return users;
};

export const getUserByIdService = async (id: string): Promise<User> => {
  const user = users.find(u => u.id === id);
  if (!user) {
    throw new Error('User not found');
  }
  return user;
};

export const getUserByEmailService = async (email: string): Promise<User | undefined> => {
  return users.find(u => u.email === email);
};
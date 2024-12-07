export interface User {
  id: string;
  email: string;
  name: string;
  password: string;
  createdAt: string;
}

export type CreateUserDto = Omit<User, 'id' | 'createdAt'>;
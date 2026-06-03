export type User = {
  id: number;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  phone: string;
  createdAt: Date;
  accountEnabled: boolean;
  role: string;
  token: string;
  updatedAt: Date;
};

export type InitialUserState = {
  isLoading: boolean;
  isError: boolean;
  user: User | null;
};

export type UpdateData = {
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
  createdAt?: Date
}
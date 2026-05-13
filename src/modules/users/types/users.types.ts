export interface User {
  id: number;
  name: string;
  email: string;
  avatar: string;
  createdAt: string;
  password: string;
}

export type UserPayload = Pick<
  User,
  "name" | "email" | "password"
>;

export interface GetUsersParams {
  page?: number;
  limit?: number;
  search?: string;
}

export interface UpdateUserProps {
  id: number;
  data: UserPayload;
}
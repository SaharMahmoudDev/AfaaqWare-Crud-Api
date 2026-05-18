export interface User {
  id: number;
  name: string;
  email: string;
  avatar: string;
  createdAt: string;
  password: string;
}
export interface GetUsersResponse {
  users: User[];
  total: number;
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
  id: number|null;
  data:{
    name: string;
  email: string;
  password?: string;
  }
}
 export type InitialUpdateUser = Pick<
  User,
  "name" | "email"
>;

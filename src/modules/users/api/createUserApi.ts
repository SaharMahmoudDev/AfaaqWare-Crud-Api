import apiClient from "@/services/apiClient";

import { UserPayload, User } from "../types/users.types";
export function createUser(data: UserPayload): Promise<User> {
  return apiClient.post<User>(`/users`, data);
}

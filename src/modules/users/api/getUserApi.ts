import apiClient from "@/services/apiClient";

import { User } from "../types/users.types";

export function getUserApi(id: number): Promise<User> {
  return apiClient.get<User>(`/users/${id}`);
}

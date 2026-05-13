import apiClient from "@/services/apiClient";

import { UpdateUserProps, User } from "../types/users.types";

export function updateUser({ data, id }: UpdateUserProps): Promise<User> {
  return apiClient.put<User>(`/users/${id}`, data);
}

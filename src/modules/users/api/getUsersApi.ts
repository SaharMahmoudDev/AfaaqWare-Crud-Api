import apiClient from "@/services/apiClient";

import { GetUsersParams, User } from "../types/users.types";

export async function getUsersApi({
  search,
  page,
  limit,
}: GetUsersParams): Promise<User[]> {
  return apiClient.get<User[]>("/users", {
    search,
    page,
    limit,
  });
}

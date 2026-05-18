import apiClient from "@/services/apiClient";

import { GetUsersParams, User } from "../types/users.types";

interface GetUsersResponse {
  users: User[];
  total: number;
  totalPages: number;
}

export async function getUsersApi({
  search,
  page,
  limit = 10,
}: GetUsersParams): Promise<GetUsersResponse> {
  const res = await apiClient.get<User[]>("/users", {
    ...(search ? { q: search } : {}),
    _page: page,
    _limit: limit,
    _sort: "id",
    _order: "desc",
  });
  const totalUsers = Number(res.headers["x-total-count"]);
  const totalPages = Number(totalUsers / limit);
  return {
    users: res.data,
    total: Number(res.headers["x-total-count"]),
    totalPages: totalPages,
  };
}

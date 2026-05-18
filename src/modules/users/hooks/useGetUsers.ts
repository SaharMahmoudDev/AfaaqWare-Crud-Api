"use client";
import { useApiQuery } from "@/shared/hooks/useApiQuery";
import { getUsersApi } from "../api/getUsersApi";
import { GetUsersParams } from "../types/users.types";

export default function useGetUsers({ search, page, limit }: GetUsersParams) {
  return useApiQuery({
    queryKey: ["users", { search, page, limit }],
    queryFn: () => {
      return getUsersApi({ search, page, limit });
    },
    options: {
      retry: 1,
    },
  });
}

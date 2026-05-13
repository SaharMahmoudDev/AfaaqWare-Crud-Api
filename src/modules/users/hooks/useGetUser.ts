"use client";
import { useApiQuery } from "@/shared/hooks/useApiQuery";
import { getUserApi } from "../api/getUserApi";

export default function useGetUser(id:number) {
  return useApiQuery({
    queryKey: ["users"],
    queryFn: () => getUserApi(id),
    options: {
      retry: 1,
    },
  });
}

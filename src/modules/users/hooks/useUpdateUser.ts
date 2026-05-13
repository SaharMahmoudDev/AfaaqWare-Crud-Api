import { useApiMutation } from "@/shared/hooks/useApiMutation";
import { updateUser } from "../api/updateUserApi";
import { useQueryClient } from "@tanstack/react-query";

export function useUpdateUser() {
  const queryClient = useQueryClient();
  return useApiMutation({
    mutationFn: updateUser,
    options: {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["users"] });
      },
    },
  });
}

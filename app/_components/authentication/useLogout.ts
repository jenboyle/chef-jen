import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logout as logoutApi } from "../../_lib/apiAuth";
import { useRouter } from "next/navigation";

export function useLogout() {
  const queryClient = useQueryClient();
  const router = useRouter();
  const { mutate: logout, isPending: isLoading } = useMutation({
    mutationFn: logoutApi,
    onSuccess: () => {
      queryClient.removeQueries();
      router.replace("/");
    },
  });
  return { logout, isLoading };
}

import { getCurrentUser } from "@/app/_lib/apiAuth";
import { useQuery } from "@tanstack/react-query";

export function useUser() {
  const { isLoading, data: user } = useQuery({
    queryKey: ["user"],
    queryFn: getCurrentUser,
  });
  return {
    isLoading,
    user,
    isAuthenticated: user?.role === "authenticated",
    isAdmin: user?.email === "groovyjenbass@gmail.com",
  };
}

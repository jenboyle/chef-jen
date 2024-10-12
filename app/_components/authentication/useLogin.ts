import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login as loginApi } from "../../_lib/apiAuth";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

type emailCredentials = {
  email: string;
  password: string;
};

export function useLogin() {
  const queryClient = useQueryClient();
  const router = useRouter();

  const { mutate: login, isPending: isLoading } = useMutation({
    mutationFn: ({ email, password }: emailCredentials) =>
      loginApi({
        email,
        password,
      }),
    onSuccess: (user) => {
      //console.log(user);
      queryClient.setQueryData(["user"], user.user);
      router.replace("/starters");
    },
    onError: (err) => {
      console.log("error", err);
      toast.error(`Error logging in: ${err.message}`);
    },
  });
  return { login, isLoading };
}

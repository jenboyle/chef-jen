import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login as loginApi } from "../../_lib/apiAuth";

type emailCredentials = {
  email: string;
  password: string;
};

export function useLogin() {
  const queryClient = useQueryClient();

  const { mutate: login, isPending: isLoading } = useMutation({
    mutationFn: ({ email, password }: emailCredentials) =>
      loginApi({
        email,
        password,
      }),
    onSuccess: (user) => {
      console.log(user);
      queryClient.setQueryData(["user"], user.user);
      //navigate
    },
    onError: (err) => {
      console.log("error", err);
    },
  });
  return { login, isLoading };
}

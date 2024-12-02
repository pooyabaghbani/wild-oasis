import { useMutation } from "@tanstack/react-query";
import { signup as signupApi } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useSignup() {
  const { mutate: signup, isPending } = useMutation({
    mutationFn: signupApi,
    onSuccess: user => {
      toast.success("User successfully created");
    },
    onError: err =>
      toast.error("There was an error creating user please try again"),
  });
  return { signup, isPending };
}

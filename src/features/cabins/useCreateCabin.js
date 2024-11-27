import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditCabin } from "../../services/apiCabins";
import toast from "react-hot-toast";

export function useCreateCabin() {
  const queryClint = useQueryClient();
  const { isPending: isCreating, mutate: createCabin } = useMutation({
    mutationFn: createEditCabin,
    onSuccess: () => {
      queryClint.invalidateQueries({
        queryKey: ["cabinsData"],
      });
      toast.success("Cabin successfully created");
    },
    onError: err => toast.error(err.message),
  });
  return { isCreating, createCabin };
}

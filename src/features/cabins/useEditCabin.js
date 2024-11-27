import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditCabin } from "../../services/apiCabins";
import toast from "react-hot-toast";

export function useEditCabin() {
  const queryClint = useQueryClient();

  const { isPending: isEditing, mutate: editCabin } = useMutation({
    mutationFn: ({ newCabinData, id }) => createEditCabin(newCabinData, id),
    onSuccess: () => {
      queryClint.invalidateQueries({
        queryKey: ["cabinsData"],
      });
      toast.success("Cabin successfully edited");
    },
    onError: err => toast.error(err.message),
  });
  return { isEditing, editCabin };
}

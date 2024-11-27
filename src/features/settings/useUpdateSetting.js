import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updateSetting as updateSettingApi } from "../../services/apiSettings";

export function useUpdateSetting() {
  const queryClint = useQueryClient();

  const { isPending: isUpdating, mutate: updateSetting } = useMutation({
    mutationFn: updateSettingApi,
    onSuccess: () => {
      toast.success("Settings successfully edited");
      queryClint.invalidateQueries({
        queryKey: ["settingsData"],
      });
    },
    onError: err => toast.error(err.message),
  });
  return { isUpdating, updateSetting };
}

import { useQuery } from "@tanstack/react-query";
import { getSettings } from "../../services/apiSettings";

export function useSettings() {
  const {
    isPending,
    data: settings,
    error,
  } = useQuery({
    queryKey: ["settingsData"],
    queryFn: getSettings,
  });
  return { isPending, settings, error };
}

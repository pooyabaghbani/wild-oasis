import { useQuery } from "@tanstack/react-query";
import { getCabins } from "../../services/apiCabins";

export function useCabins() {
  const {
    isPending,
    error,
    data: cabins,
  } = useQuery({
    queryKey: ["cabinsData"],
    queryFn: getCabins,
  });

  return { isPending, error, data: cabins };
}

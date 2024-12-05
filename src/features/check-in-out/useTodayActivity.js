import { useQuery } from "@tanstack/react-query";
import { getStaysTodayActivity } from "../../services/apiBookings";

export function useTodayActivity() {
  const { data: todayActivity, isPending } = useQuery({
    queryKey: ["todayActivity"],
    queryFn: getStaysTodayActivity,
  });
  return { todayActivity, isPending };
}

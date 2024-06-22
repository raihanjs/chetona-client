import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

export default function usePromotions() {
  const axiosPublic = useAxiosPublic();
  const {
    data: promotions = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["promotions"],
    queryFn: async () => {
      const res = await axiosPublic.get("/promotions");
      return res.data;
    },
  });
  return [promotions, isLoading, refetch];
}

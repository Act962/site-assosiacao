import { useTRPC } from "@/trpc/client";
import { useQuery } from "@tanstack/react-query";

export const useQueryNews = () => {
  const trpc = useTRPC();
  const { data, isLoading } = useQuery(trpc.news.getMany.queryOptions());

  return {
    news: data?.docs || [],
    isLoading,
  };
};

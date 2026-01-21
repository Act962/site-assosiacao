"use client";

import { useTRPC } from "@/trpc/client";
import { useQuery } from "@tanstack/react-query";

export const useQueryCategory = () => {
  const trpc = useTRPC();
  const { data, isLoading } = useQuery(trpc.category.getMany.queryOptions());

  return {
    categories: data?.docs || [],
    isLoadingCategory: isLoading,
  };
};

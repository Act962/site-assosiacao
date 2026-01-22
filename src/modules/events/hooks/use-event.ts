import { useTRPC } from "@/trpc/client";
import { useQuery } from "@tanstack/react-query";
import { useLocale } from "next-intl";

export const useQueryEvents = (limit: number) => {
  const trpc = useTRPC();
  const locale = useLocale();
  const { data, isLoading } = useQuery(
    trpc.events.getMany.queryOptions({ locale, limit }),
  );

  return {
    events: data?.docs || [],
    isLoading,
  };
};

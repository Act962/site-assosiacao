import { baseProcedure, createTRPCRouter } from "@/trpc/init";

export const categoryRouter = createTRPCRouter({
  getMany: baseProcedure.query(async ({ ctx }) => {
    const data = await ctx.db.find({
      collection: "categories",
      pagination: false,
      where: {
        type: {
          equals: "Notícia",
        },
      },
      sort: ["name"],
    });

    return data;
  }),
});

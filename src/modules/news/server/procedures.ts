import { baseProcedure, createTRPCRouter } from "@/trpc/init";

export const newsRouter = createTRPCRouter({
  getMany: baseProcedure.query(async ({ ctx }) => {
    const data = await ctx.db.find({
      collection: "news",
      depth: 1, // Populate "category" & "coverImage"
      pagination: false,
    });

    return data;
  }),
});

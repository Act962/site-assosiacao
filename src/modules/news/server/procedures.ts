import { Category, Media } from "@/payload-types";
import { baseProcedure, createTRPCRouter } from "@/trpc/init";

export const newsRouter = createTRPCRouter({
  getMany: baseProcedure.query(async ({ ctx }) => {
    const data = await ctx.db.find({
      collection: "news",
      depth: 1, // Populate "category" & "coverImage"
      pagination: false,
    });

    return {
      ...data,
      docs: data.docs.map((doc) => ({
        ...doc,
        coverImage: doc.coverImage as Media | null,
        categories: doc.categories as Category | null,
      })),
    };
  }),
});

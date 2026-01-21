import { Category, Media } from "@/payload-types";
import { baseProcedure, createTRPCRouter } from "@/trpc/init";
import { z } from "zod";

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
  getOne: baseProcedure
    .input(
      z.object({
        slug: z.string(),
      }),
    )
    .query(async ({ ctx, input }) => {
      const data = await ctx.db.find({
        collection: "news",
        where: {
          slug: {
            equals: input.slug,
          },
        },
        limit: 1,
        depth: 1,
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

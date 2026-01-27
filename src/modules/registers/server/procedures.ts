import { baseProcedure, createTRPCRouter } from "@/trpc/init";
import { z } from "zod";

export const registerRouter = createTRPCRouter({
  create: baseProcedure
    .input(
      z.object({
        name: z.string(),
        email: z.email(),
        phone: z.string(),
        address: z.string(),
        city: z.string(),
        state: z.string(),
        zipCode: z.string(),
        origin: z
          .enum(["association", "support", "legal"])
          .default("association"),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const register = await ctx.db.create({
        collection: "register",
        data: {
          name: input.name,
          email: input.email,
          phone: input.phone,
          address: input.address,
          city: input.city,
          state: input.state,
          zipCode: input.zipCode,
          origin: input.origin,
        },
      });

      return register;
    }),
});

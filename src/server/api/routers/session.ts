import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { z } from "zod";

export const sessionRouter = createTRPCRouter({
  create: publicProcedure.mutation(async ({ ctx }) => {
    const session = await ctx.db.session.create({
      data: {},
      select: {
        id: true,
      },
    });

    return session;
  }),
  getSessionById: publicProcedure
    .input(
      z.object({
        id: z.string().min(1),
      }),
    )
    .query(async ({ ctx, input }) => {
      const { id } = input;

      const session = await ctx.db.session.findUnique({
        where: {
          id,
        },
      });

      return session;
    }),
});

import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import type { Level } from "@prisma/client";
import { z } from "zod";

export const passageRouter = createTRPCRouter({
  getPassageByDifficulty: publicProcedure
    .input(z.object({ difficulty: z.string().min(1) }))
    .mutation(async ({ ctx, input }) => {
      const count = await ctx.db.passage.count({
        where: {
          level: input.difficulty as Level,
        },
      });

      const randomSkip = Math.floor(Math.random() * count);

      const passage = await ctx.db.passage.findFirst({
        where: {
          level: input.difficulty as Level,
        },
        skip: randomSkip,
      });

      return passage;
    }),
});

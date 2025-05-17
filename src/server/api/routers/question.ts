import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { z } from "zod";

export const questionRouter = createTRPCRouter({
  getQuestionByPassage: publicProcedure
    .input(z.object({ passageId: z.string().min(1) }))
    .mutation(async ({ ctx, input }) => {
      const questions = await ctx.db.question.findMany({
        where: {
          passageId: input.passageId,
        },
      });
      return questions;
    }),
  getQuestionAnswerByPassageId: publicProcedure
    .input(z.object({ passageId: z.string().min(1) }))
    .mutation(async ({ ctx, input }) => {
      const questions = await ctx.db.question.findMany({
        where: {
          passageId: input.passageId,
        },
        select: {
          id: true,
          answerIdx: true,
        },
      });
      return questions;
    }),
});

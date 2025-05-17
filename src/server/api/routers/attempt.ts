import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { z } from "zod";

export const attemptRouter = createTRPCRouter({
  creatAttempyByPassage: publicProcedure
    .input(
      z.object({
        answers: z.array(z.string().min(1)),
        startTime: z.number(),
        endTime: z.number(),
        sessionId: z.string().min(1),
        passageId: z.string().min(1),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const { answers, startTime, endTime, sessionId, passageId } = input;

      const passage = await ctx.db.passage.findUnique({
        where: {
          id: passageId,
        },
      });
      const readingTime = endTime - startTime;
      const wordPerMinute = passage?.body
        ? Math.round(
            (passage.body.trim().split(/\s+/).length / readingTime) * 60,
          )
        : 0;
      const answerIdx = answers.map((answer) => parseInt(answer));

      const attempt = await ctx.db.attempt.create({
        data: {
          answerIdx,
          readingTime,
          wordPerMinute,
          sessionId,
          passageId,
        },
      });

      return attempt;
    }),
  getAttemptById: publicProcedure
    .input(
      z.object({
        id: z.string().min(1),
      }),
    )
    .query(async ({ ctx, input }) => {
      const { id } = input;
      const attempt = await ctx.db.attempt.findUnique({
        where: {
          id,
        },
        include: {
          passage: {
            select: {
              body: true,
              questions: {
                select: {
                  id: true,
                  answerIdx: true,
                },
              },
            },
          },
        },
      });
      const correctAnswers =
        attempt?.answerIdx.reduce((acc, answer, index) => {
          const question = attempt?.passage.questions[index];
          if (question && question.answerIdx === answer) {
            return acc + 1;
          }
          return acc;
        }, 0) ?? 0;
      const comprehensionScore = Math.round(
        (correctAnswers / (attempt?.passage.questions.length ?? 1)) * 100,
      );

      return {
        ...attempt,
        correctAnswers,
        comprehensionScore,
      };
    }),
});

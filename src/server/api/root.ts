import { postRouter } from "@/server/api/routers/post";
import { createCallerFactory, createTRPCRouter } from "@/server/api/trpc";
import { sessionRouter } from "@/server/api/routers/session";
import { passageRouter } from "./routers/passage";
import { questionRouter } from "./routers/question";
import { attemptRouter } from "./routers/attempt";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  post: postRouter,
  session: sessionRouter,
  passage: passageRouter,
  question: questionRouter,
  attempt: attemptRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;

/**
 * Create a server-side caller for the tRPC API.
 * @example
 * const trpc = createCaller(createContext);
 * const res = await trpc.post.all();
 *       ^? Post[]
 */
export const createCaller = createCallerFactory(appRouter);

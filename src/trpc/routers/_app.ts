import { createTRPCRouter } from "../init";
import { newsRouter } from "@/modules/news/server/procedures";
import { categoryRouter } from "@/modules/categories/server/procedures";
import { eventsRouter } from "@/modules/events/server/procedures";
import { classesRouter } from "@/modules/classes/server/procedure";
export const appRouter = createTRPCRouter({
  news: newsRouter,
  category: categoryRouter,
  events: eventsRouter,
  classes: classesRouter,
});
// export type definition of API
export type AppRouter = typeof appRouter;

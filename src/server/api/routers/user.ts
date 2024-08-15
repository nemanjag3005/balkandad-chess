/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { eq } from "drizzle-orm";
import { z } from "zod";

import { createTRPCRouter, privateProcedure } from "~/server/api/trpc";
import { users } from "~/server/db/schema";

export const userRouter = createTRPCRouter({
  updateToPaid: privateProcedure.mutation(async ({ ctx }) => {
    const userId = await ctx.db.query.users
      .findFirst({
        where: eq(users.id, ctx.user.id),
      })
      .then((user) => {
        if (user) return user.id;
      });
    if (!userId) {
      throw new Error("User not found");
    }
    return ctx.db
      .update(users)
      .set({ status: "paid" })
      .where(eq(users.id, userId));
  }),
});

// export const postRouter = createTRPCRouter({
//   hello: publicProcedure
//     .input(z.object({ text: z.string() }))
//     .query(({ input }) => {
//       return {
//         greeting: `Hello ${input.text}`,
//       };
//     }),

//   create: publicProcedure
//     .input(z.object({ name: z.string().min(1) }))
//     .mutation(async ({ ctx, input }) => {
//       // simulate a slow db call
//       await new Promise((resolve) => setTimeout(resolve, 1000));

//       await ctx.db.insert(posts).values({
//         name: input.name,
//       });
//     }),

//   getLatest: publicProcedure.query(({ ctx }) => {
//     return ctx.db.query.posts.findFirst({
//       orderBy: (posts, { desc }) => [desc(posts.createdAt)],
//     });
//   }),
// });

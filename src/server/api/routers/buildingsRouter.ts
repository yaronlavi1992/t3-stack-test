import { z } from "zod";

import { createTRPCRouter, publicProcedure, protectedProcedure } from "../trpc";

export const buildingsRouter = createTRPCRouter({
  submitBuildingSpecification: publicProcedure
    .input(z.object({ energyGrade: z.string(), description: z.string() }))
    .mutation(async ({ input, ctx }) => {
      // TODO: save to the database
      const building = await ctx.prisma.buildingSpecification.create({
        data: {
          ...input,
        }
      });
      return building;
    }),

  getBuildings: publicProcedure.query(async ({ ctx }) => {
    const buildings = await ctx.prisma.buildingSpecification.findMany();
    return buildings;
  }),

  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.example.findMany();
  }),

  getSecretMessage: protectedProcedure.query(() => {
    return "you can now see this secret message!";
  }),
});

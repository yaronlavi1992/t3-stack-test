/*
  Warnings:

  - You are about to drop the column `author` on the `BuildingSpecification` table. All the data in the column will be lost.
  - Added the required column `energyGrade` to the `BuildingSpecification` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "BuildingSpecification" DROP COLUMN "author",
ADD COLUMN     "energyGrade" TEXT NOT NULL;

/*
  Warnings:

  - You are about to drop the column `closedPositionsId` on the `options` table. All the data in the column will be lost.
  - You are about to drop the column `executionPrice` on the `options` table. All the data in the column will be lost.
  - You are about to drop the column `openPositionsId` on the `options` table. All the data in the column will be lost.
  - You are about to drop the column `closedPositionsId` on the `underAssets` table. All the data in the column will be lost.
  - You are about to drop the column `openPositionsId` on the `underAssets` table. All the data in the column will be lost.
  - You are about to drop the `ClosedPositions` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `OpenPositions` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[optionSlug]` on the table `options` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[strategySlug]` on the table `strategies` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[underAssetSlug]` on the table `underAssets` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `openPrice` to the `options` table without a default value. This is not possible if the table is not empty.
  - Added the required column `optionSlug` to the `options` table without a default value. This is not possible if the table is not empty.
  - Added the required column `strategyId` to the `options` table without a default value. This is not possible if the table is not empty.
  - Added the required column `trade` to the `options` table without a default value. This is not possible if the table is not empty.
  - Added the required column `strategySlug` to the `strategies` table without a default value. This is not possible if the table is not empty.
  - Added the required column `strategyId` to the `underAssets` table without a default value. This is not possible if the table is not empty.
  - Added the required column `trade` to the `underAssets` table without a default value. This is not possible if the table is not empty.
  - Added the required column `underAssetSlug` to the `underAssets` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Trade" AS ENUM ('OPEN', 'CLOSED');

-- DropForeignKey
ALTER TABLE "ClosedPositions" DROP CONSTRAINT "ClosedPositions_strategyId_fkey";

-- DropForeignKey
ALTER TABLE "OpenPositions" DROP CONSTRAINT "OpenPositions_strategyId_fkey";

-- DropForeignKey
ALTER TABLE "options" DROP CONSTRAINT "options_closedPositionsId_fkey";

-- DropForeignKey
ALTER TABLE "options" DROP CONSTRAINT "options_openPositionsId_fkey";

-- DropForeignKey
ALTER TABLE "underAssets" DROP CONSTRAINT "underAssets_closedPositionsId_fkey";

-- DropForeignKey
ALTER TABLE "underAssets" DROP CONSTRAINT "underAssets_openPositionsId_fkey";

-- AlterTable
ALTER TABLE "options" DROP COLUMN "closedPositionsId",
DROP COLUMN "executionPrice",
DROP COLUMN "openPositionsId",
ADD COLUMN     "openPrice" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "optionSlug" TEXT NOT NULL,
ADD COLUMN     "strategyId" TEXT NOT NULL,
ADD COLUMN     "trade" "Trade" NOT NULL;

-- AlterTable
ALTER TABLE "strategies" ADD COLUMN     "strategySlug" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "underAssets" DROP COLUMN "closedPositionsId",
DROP COLUMN "openPositionsId",
ADD COLUMN     "strategyId" TEXT NOT NULL,
ADD COLUMN     "trade" "Trade" NOT NULL,
ADD COLUMN     "underAssetSlug" TEXT NOT NULL;

-- DropTable
DROP TABLE "ClosedPositions";

-- DropTable
DROP TABLE "OpenPositions";

-- CreateIndex
CREATE UNIQUE INDEX "options_optionSlug_key" ON "options"("optionSlug");

-- CreateIndex
CREATE UNIQUE INDEX "strategies_strategySlug_key" ON "strategies"("strategySlug");

-- CreateIndex
CREATE UNIQUE INDEX "underAssets_underAssetSlug_key" ON "underAssets"("underAssetSlug");

-- AddForeignKey
ALTER TABLE "options" ADD CONSTRAINT "options_strategyId_fkey" FOREIGN KEY ("strategyId") REFERENCES "strategies"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "underAssets" ADD CONSTRAINT "underAssets_strategyId_fkey" FOREIGN KEY ("strategyId") REFERENCES "strategies"("id") ON DELETE CASCADE ON UPDATE CASCADE;

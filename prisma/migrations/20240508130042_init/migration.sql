/*
  Warnings:

  - You are about to drop the column `underlyingAsset` on the `options` table. All the data in the column will be lost.
  - You are about to drop the `variants` table. If the table is not empty, all the data it contains will be lost.
  - Changed the type of `position` on the `options` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "Position" AS ENUM ('LONG', 'SHORT');

-- CreateEnum
CREATE TYPE "UnderAssetType" AS ENUM ('STOCK');

-- DropForeignKey
ALTER TABLE "options" DROP CONSTRAINT "options_variant_id_fkey";

-- DropForeignKey
ALTER TABLE "variants" DROP CONSTRAINT "variants_strategy_id_fkey";

-- AlterTable
ALTER TABLE "options" DROP COLUMN "underlyingAsset",
ADD COLUMN     "closedPositionsId" TEXT,
ADD COLUMN     "executionPrice" DOUBLE PRECISION,
ADD COLUMN     "openPositionsId" TEXT,
ADD COLUMN     "underAssetName" TEXT,
DROP COLUMN "position",
ADD COLUMN     "position" "Position" NOT NULL,
ALTER COLUMN "divident" DROP NOT NULL;

-- AlterTable
ALTER TABLE "strategies" ADD COLUMN     "fees" DOUBLE PRECISION;

-- DropTable
DROP TABLE "variants";

-- DropEnum
DROP TYPE "OptionPosition";

-- CreateTable
CREATE TABLE "OpenPositions" (
    "id" TEXT NOT NULL,
    "strategyId" TEXT NOT NULL,

    CONSTRAINT "OpenPositions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ClosedPositions" (
    "id" TEXT NOT NULL,
    "strategyId" TEXT NOT NULL,

    CONSTRAINT "ClosedPositions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "underAssets" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "type" "UnderAssetType" NOT NULL,
    "openPrice" DOUBLE PRECISION NOT NULL,
    "closePrice" DOUBLE PRECISION,
    "position" "Position" NOT NULL,
    "name" TEXT,
    "openPositionsId" TEXT,
    "closedPositionsId" TEXT,

    CONSTRAINT "underAssets_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "OpenPositions_strategyId_key" ON "OpenPositions"("strategyId");

-- CreateIndex
CREATE UNIQUE INDEX "ClosedPositions_strategyId_key" ON "ClosedPositions"("strategyId");

-- AddForeignKey
ALTER TABLE "OpenPositions" ADD CONSTRAINT "OpenPositions_strategyId_fkey" FOREIGN KEY ("strategyId") REFERENCES "strategies"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ClosedPositions" ADD CONSTRAINT "ClosedPositions_strategyId_fkey" FOREIGN KEY ("strategyId") REFERENCES "strategies"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "options" ADD CONSTRAINT "options_openPositionsId_fkey" FOREIGN KEY ("openPositionsId") REFERENCES "OpenPositions"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "options" ADD CONSTRAINT "options_closedPositionsId_fkey" FOREIGN KEY ("closedPositionsId") REFERENCES "ClosedPositions"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "underAssets" ADD CONSTRAINT "underAssets_openPositionsId_fkey" FOREIGN KEY ("openPositionsId") REFERENCES "OpenPositions"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "underAssets" ADD CONSTRAINT "underAssets_closedPositionsId_fkey" FOREIGN KEY ("closedPositionsId") REFERENCES "ClosedPositions"("id") ON DELETE CASCADE ON UPDATE CASCADE;

/*
  Warnings:

  - You are about to drop the column `underAssetName` on the `options` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `underAssets` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "options" DROP COLUMN "underAssetName";

-- AlterTable
ALTER TABLE "underAssets" DROP COLUMN "name";

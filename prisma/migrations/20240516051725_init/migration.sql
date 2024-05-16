/*
  Warnings:

  - The values [CALL,PUT] on the enum `OptionType` will be removed. If these variants are still used in the database, this will fail.
  - The values [LONG,SHORT] on the enum `Position` will be removed. If these variants are still used in the database, this will fail.
  - The values [OPEN,CLOSED] on the enum `Trade` will be removed. If these variants are still used in the database, this will fail.
  - The values [STOCK] on the enum `UnderAssetType` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "OptionType_new" AS ENUM ('Call', 'Put');
ALTER TABLE "options" ALTER COLUMN "type" TYPE "OptionType_new" USING ("type"::text::"OptionType_new");
ALTER TYPE "OptionType" RENAME TO "OptionType_old";
ALTER TYPE "OptionType_new" RENAME TO "OptionType";
DROP TYPE "OptionType_old";
COMMIT;

-- AlterEnum
BEGIN;
CREATE TYPE "Position_new" AS ENUM ('Long', 'Short');
ALTER TABLE "options" ALTER COLUMN "position" TYPE "Position_new" USING ("position"::text::"Position_new");
ALTER TABLE "underAssets" ALTER COLUMN "position" TYPE "Position_new" USING ("position"::text::"Position_new");
ALTER TYPE "Position" RENAME TO "Position_old";
ALTER TYPE "Position_new" RENAME TO "Position";
DROP TYPE "Position_old";
COMMIT;

-- AlterEnum
BEGIN;
CREATE TYPE "Trade_new" AS ENUM ('Open', 'Closed');
ALTER TABLE "options" ALTER COLUMN "trade" TYPE "Trade_new" USING ("trade"::text::"Trade_new");
ALTER TABLE "underAssets" ALTER COLUMN "trade" TYPE "Trade_new" USING ("trade"::text::"Trade_new");
ALTER TYPE "Trade" RENAME TO "Trade_old";
ALTER TYPE "Trade_new" RENAME TO "Trade";
DROP TYPE "Trade_old";
COMMIT;

-- AlterEnum
BEGIN;
CREATE TYPE "UnderAssetType_new" AS ENUM ('Stock');
ALTER TABLE "underAssets" ALTER COLUMN "type" TYPE "UnderAssetType_new" USING ("type"::text::"UnderAssetType_new");
ALTER TYPE "UnderAssetType" RENAME TO "UnderAssetType_old";
ALTER TYPE "UnderAssetType_new" RENAME TO "UnderAssetType";
DROP TYPE "UnderAssetType_old";
COMMIT;

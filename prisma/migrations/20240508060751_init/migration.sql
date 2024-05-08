/*
  Warnings:

  - You are about to drop the column `strike` on the `options` table. All the data in the column will be lost.
  - Added the required column `strikeInterval` to the `options` table without a default value. This is not possible if the table is not empty.
  - Added the required column `spread` to the `variants` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "options" DROP COLUMN "strike",
ADD COLUMN     "strikeInterval" DOUBLE PRECISION NOT NULL;

-- AlterTable
ALTER TABLE "variants" ADD COLUMN     "spread" DOUBLE PRECISION NOT NULL;

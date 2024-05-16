/*
  Warnings:

  - You are about to drop the column `expirationDate` on the `options` table. All the data in the column will be lost.
  - Added the required column `expiration` to the `options` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "options" DROP COLUMN "expirationDate",
ADD COLUMN     "expiration" INTEGER NOT NULL;

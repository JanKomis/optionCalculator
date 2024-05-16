-- CreateEnum
CREATE TYPE "Model" AS ENUM ('Black_Scholes');

-- AlterTable
ALTER TABLE "options" ADD COLUMN     "model" "Model" NOT NULL DEFAULT 'Black_Scholes';

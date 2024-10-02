/*
  Warnings:

  - You are about to drop the column `name` on the `Seller` table. All the data in the column will be lost.
  - Added the required column `firstLastName` to the `Seller` table without a default value. This is not possible if the table is not empty.
  - Added the required column `firstName` to the `Seller` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Seller" DROP COLUMN "name",
ADD COLUMN     "firstLastName" TEXT NOT NULL,
ADD COLUMN     "firstName" TEXT NOT NULL,
ADD COLUMN     "secondLastName" TEXT,
ADD COLUMN     "secondName" TEXT;

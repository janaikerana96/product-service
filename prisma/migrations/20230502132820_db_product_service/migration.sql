/*
  Warnings:

  - You are about to drop the column `currency` on the `Currency` table. All the data in the column will be lost.
  - You are about to drop the column `price` on the `Price` table. All the data in the column will be lost.
  - Added the required column `currencyValue` to the `Currency` table without a default value. This is not possible if the table is not empty.
  - Added the required column `priceValue` to the `Price` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Currency` DROP COLUMN `currency`,
    ADD COLUMN `currencyValue` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `Price` DROP COLUMN `price`,
    ADD COLUMN `priceValue` INTEGER NOT NULL;

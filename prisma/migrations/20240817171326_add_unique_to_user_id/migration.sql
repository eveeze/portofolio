/*
  Warnings:

  - A unique constraint covering the columns `[userId]` on the table `TwoFactorToken` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "TwoFactorToken_userId_key" ON "TwoFactorToken"("userId");

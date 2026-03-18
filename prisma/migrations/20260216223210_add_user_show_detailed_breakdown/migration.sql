-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL,
    "name" TEXT,
    "passwordHash" TEXT NOT NULL,
    "emailVerified" DATETIME,
    "image" TEXT,
    "businessName" TEXT,
    "logo" TEXT,
    "address" TEXT,
    "phone" TEXT,
    "shopRate" REAL,
    "overheadRate" REAL,
    "defaultMargin" REAL,
    "stripeCustomerId" TEXT,
    "subscriptionStatus" TEXT,
    "plan" TEXT NOT NULL DEFAULT 'free',
    "showDetailedBreakdown" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_User" ("address", "businessName", "createdAt", "defaultMargin", "email", "emailVerified", "id", "image", "logo", "name", "overheadRate", "passwordHash", "phone", "plan", "shopRate", "stripeCustomerId", "subscriptionStatus", "updatedAt") SELECT "address", "businessName", "createdAt", "defaultMargin", "email", "emailVerified", "id", "image", "logo", "name", "overheadRate", "passwordHash", "phone", "plan", "shopRate", "stripeCustomerId", "subscriptionStatus", "updatedAt" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

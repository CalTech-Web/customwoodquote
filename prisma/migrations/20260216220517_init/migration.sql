-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL,
    "name" TEXT,
    "passwordHash" TEXT NOT NULL,
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
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Project" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'draft',
    "title" TEXT NOT NULL,
    "description" TEXT,
    "customerName" TEXT,
    "customerEmail" TEXT,
    "customerPhone" TEXT,
    "furnitureType" TEXT,
    "style" TEXT,
    "complexityTier" TEXT,
    "lengthIn" REAL,
    "widthIn" REAL,
    "heightIn" REAL,
    "photoUrls" TEXT,
    "aiAnalysis" TEXT,
    "shopRate" REAL,
    "overheadRate" REAL,
    "marginPercent" REAL,
    "subtotal" REAL,
    "tax" REAL,
    "total" REAL,
    "shareToken" TEXT,
    "paymentTerms" TEXT,
    "estimatedTimeline" TEXT,
    "notes" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "sentAt" DATETIME,
    "acceptedAt" DATETIME,
    "completedAt" DATETIME,
    CONSTRAINT "Project_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "LineItem" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "projectId" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "quantity" REAL NOT NULL,
    "unit" TEXT NOT NULL,
    "unitCost" REAL NOT NULL,
    "totalCost" REAL NOT NULL,
    "sortOrder" INTEGER NOT NULL DEFAULT 0,
    CONSTRAINT "LineItem_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "MaterialPrice" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT,
    "category" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "species" TEXT,
    "grade" TEXT,
    "unit" TEXT NOT NULL,
    "pricePerUnit" REAL NOT NULL,
    "supplier" TEXT,
    "lastUpdated" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "MaterialPrice_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Template" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "furnitureType" TEXT,
    "style" TEXT,
    "defaultLineItems" TEXT,
    CONSTRAINT "Template_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Project_shareToken_key" ON "Project"("shareToken");

-- CreateIndex
CREATE INDEX "Project_userId_idx" ON "Project"("userId");

-- CreateIndex
CREATE INDEX "Project_status_idx" ON "Project"("status");

-- CreateIndex
CREATE INDEX "LineItem_projectId_idx" ON "LineItem"("projectId");

-- CreateIndex
CREATE INDEX "MaterialPrice_userId_idx" ON "MaterialPrice"("userId");

-- CreateIndex
CREATE INDEX "MaterialPrice_category_idx" ON "MaterialPrice"("category");

-- CreateIndex
CREATE INDEX "Template_userId_idx" ON "Template"("userId");

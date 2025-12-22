-- CreateTable
CREATE TABLE "WorkDay" (
    "id" SERIAL NOT NULL,
    "date" DATE NOT NULL,
    "isAvailable" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "WorkDay_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "WorkDay_date_key" ON "WorkDay"("date");

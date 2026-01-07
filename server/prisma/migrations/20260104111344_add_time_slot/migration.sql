-- CreateTable
CREATE TABLE "TimeSlot" (
    "id" SERIAL NOT NULL,
    "time" TEXT NOT NULL,
    "isAvailable" BOOLEAN NOT NULL DEFAULT true,
    "workDayId" INTEGER NOT NULL,

    CONSTRAINT "TimeSlot_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "TimeSlot_workDayId_time_key" ON "TimeSlot"("workDayId", "time");

-- AddForeignKey
ALTER TABLE "TimeSlot" ADD CONSTRAINT "TimeSlot_workDayId_fkey" FOREIGN KEY ("workDayId") REFERENCES "WorkDay"("id") ON DELETE CASCADE ON UPDATE CASCADE;

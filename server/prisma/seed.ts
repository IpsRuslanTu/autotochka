import 'dotenv/config'
import { PrismaPg } from '@prisma/adapter-pg'
import { PrismaClient } from '@prisma/client'

const connectionString = process.env.DATABASE_URL!

const adapter = new PrismaPg({ connectionString })
const prisma = new PrismaClient({ adapter })

function generateWorkDays(): { date: string; isAvailable: boolean }[] {
  const dates: Date[] = []

  for (let d = 1; d <= 31; d++) {
    dates.push(new Date(2026, 0, d))
  }

  return dates.map((date) => ({
    date: date.toISOString(),
    isAvailable: true,
  }))
}

function generateTimeSlots(): string[] {
  const slots: string[] = []
  for (let hour = 9; hour <= 17; hour++) {
    slots.push(`${hour.toString().padStart(2, '0')}:00`)
    slots.push(`${hour.toString().padStart(2, '0')}:30`)
  }
  slots.push('18:00')
  return slots
}

async function main() {
  const workDays = generateWorkDays()
  await prisma.workDay.createMany({
    data: workDays,
    skipDuplicates: true,
  })

  const allDays = await prisma.workDay.findMany()

  const timeSlots = generateTimeSlots()
  const timeSlotRecords = allDays.flatMap((day) =>
    timeSlots.map((time) => ({
      time,
      isAvailable: true,
      workDayId: day.id,
    }))
  )

  const workDayIds = allDays.map((d) => d.id)
  await prisma.timeSlot.deleteMany({
    where: { workDayId: { in: workDayIds } },
  })

  await prisma.timeSlot.createMany({
    data: timeSlotRecords,
    skipDuplicates: true,
  })

  console.log('Seeding completed!')
}

main()
  .catch((e) => {
    console.error('❌ Seeding failed:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })

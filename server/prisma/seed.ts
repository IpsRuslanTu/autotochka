import "dotenv/config";
import { PrismaPg } from '@prisma/adapter-pg'
import { PrismaClient } from "@prisma/client"

const connectionString = `${process.env.DATABASE_URL}`

const adapter = new PrismaPg({ connectionString })
const prisma = new PrismaClient({ adapter })

async function main() {
  const dates: Date[] = [];

  for (let d = 1; d <= 31; d++) dates.push(new Date(2025, 11, d));
  for (let d = 1; d <= 31; d++) dates.push(new Date(2026, 0, d));

  const records = dates.map(date => ({
    date: date.toISOString(),
    isAvailable: true,
  }));

  await prisma.workDay.deleteMany();
  await prisma.workDay.createMany({ data: records, skipDuplicates: true });
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
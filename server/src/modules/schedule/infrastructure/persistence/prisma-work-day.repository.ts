import { Injectable } from '@nestjs/common';
import {PrismaService} from "../../../../infrastructure/prisma/prisma.service";
import {WorkDay} from "../../domain/entities/work-day.entity";
import {WorkDayRepository} from "../../domain/repositories/work-day.repository";

@Injectable()
export class PrismaWorkDayRepository implements WorkDayRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findByMonth(year: number, month: number): Promise<WorkDay[]> {
    const start = new Date(year, month - 1, 1);
    const end = new Date(year, month, 0);

    const rows = await this.prisma.workDay.findMany({
      where: {
        date: {
          gte: start,
          lte: end,
        },
      },
      orderBy: { date: 'asc' },
    });

    return rows.map(
      d => new WorkDay(d.id, d.date, d.isAvailable),
    );
  }
}
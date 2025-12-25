import { Module } from '@nestjs/common';
import { ScheduleController } from './presentation/schedule.controller';
import { GetMonthScheduleUseCase } from './application/use-cases/get-month-schedule.usecase';
import { WORK_DAY_REPOSITORY } from './domain/repositories/work-day.repository';
import {PrismaWorkDayRepository} from "@/modules/schedule/infrastructure/persistence/prisma-work-day.repository";
import {PrismaModule} from "@/infrastructure/prisma/prisma.module";

@Module({
  imports: [PrismaModule],
  controllers: [ScheduleController],
  providers: [
    {
      provide: GetMonthScheduleUseCase,
      useFactory: (repo) => new GetMonthScheduleUseCase(repo),
      inject: [WORK_DAY_REPOSITORY],
    },

    {
      provide: WORK_DAY_REPOSITORY,
      useClass: PrismaWorkDayRepository,
    },
  ],
})
export class ScheduleModule {}
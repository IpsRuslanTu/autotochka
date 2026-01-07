import { Module } from '@nestjs/common'
import { PrismaModule } from '@/infrastructure/prisma/prisma.module'
import { GetMonthScheduleUseCase } from './application/use-cases/get-month-schedule.usecase'
import { GetSlotsByWorkDayUsecase } from './application/use-cases/get-slots-by-work-day.usecase'
import { WORK_DAY_REPOSITORY } from './domain/repositories/work-day.repository'
import { PrismaWorkDayRepository } from './infrastructure/persistence/prisma-work-day.repository'
import { ScheduleController } from './presentation/schedule.controller'

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
      provide: GetSlotsByWorkDayUsecase,
      useFactory: (repo) => new GetSlotsByWorkDayUsecase(repo),
      inject: [WORK_DAY_REPOSITORY],
    },
    {
      provide: WORK_DAY_REPOSITORY,
      useClass: PrismaWorkDayRepository,
    },
  ],
})
export class ScheduleModule {}

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
    GetMonthScheduleUseCase,
    GetSlotsByWorkDayUsecase,
    {
      provide: WORK_DAY_REPOSITORY,
      useClass: PrismaWorkDayRepository,
    },
  ],
})
export class ScheduleModule {}

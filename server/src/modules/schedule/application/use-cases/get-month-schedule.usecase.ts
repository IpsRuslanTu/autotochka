import { Inject, Injectable } from '@nestjs/common'
import { WORK_DAY_REPOSITORY, type WorkDayRepository } from '../../domain/repositories/work-day.repository'
import { WorkDay } from '../../domain/entities/work-day.entity'

@Injectable()
export class GetMonthScheduleUseCase {
  constructor(
    @Inject(WORK_DAY_REPOSITORY)
    private readonly workDayRepository: WorkDayRepository
  ) {}

  async execute(year: number, month: number): Promise<WorkDay[]> {
    const now = new Date()

    const days = await this.workDayRepository.findByMonth(year, month)

    return days.map((i) => (i.date > now ? i : { ...i, isAvailable: false }))
  }
}

import { WorkDayRepository } from '../../domain/repositories/work-day.repository'
import { WorkDay } from '../../domain/entities/work-day.entity'

export class GetMonthScheduleUseCase {
  constructor(private readonly workDayRepository: WorkDayRepository) {}

  async execute(year: number, month: number): Promise<WorkDay[]> {
    const now = new Date()

    const days = await this.workDayRepository.findByMonth(year, month)

    return days.map((i) => (i.date > now ? i : { ...i, isAvailable: false }))
  }
}

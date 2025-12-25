import { WorkDayRepository } from '../../domain/repositories/work-day.repository';
import { WorkDay } from '../../domain/entities/work-day.entity';

export class GetMonthScheduleUseCase {
  constructor(
    private readonly workDayRepository: WorkDayRepository,
  ) {}

  async execute(year: number, month: number): Promise<WorkDay[]> {
    return this.workDayRepository.findByMonth(year, month);
  }
}
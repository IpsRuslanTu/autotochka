import { WorkDay } from '../entities/work-day.entity'

export const WORK_DAY_REPOSITORY = 'WORK_DAY_REPOSITORY'

export interface WorkDayRepository {
  findByMonth(year: number, month: number): Promise<WorkDay[]>
}

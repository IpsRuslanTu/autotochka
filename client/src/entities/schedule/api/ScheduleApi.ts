import { getMonthSchedule, getTimeSlots } from '@/shared/api/generated/scheduleGenApi.ts'
import type { WorkDay } from '../model/types/WorkDay.ts'
import type { TimeSlot } from '../model/types/TimeSlot.ts'

export class ScheduleApi {
  static async getMonthSchedule(year: number, month: number): Promise<WorkDay[]> {
    const res = await getMonthSchedule({ year, month })

    return res
      .sort((a, b) => a.date.localeCompare(b.date))
      .map((i) => ({
        id: i.id,
        date: new Date(i.date),
        isAvailable: i.isAvailable,
      }))
  }

  static async getTimeSlots(workDayId: number): Promise<TimeSlot[]> {
    const res = await getTimeSlots(workDayId)

    return res
      .sort((a, b) => a.time.localeCompare(b.time))
      .map((i) => ({
        id: i.id,
        time: i.time,
        isAvailable: i.isAvailable,
      }))
  }
}

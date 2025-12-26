import {getMonthSchedule} from "../../../shared/api/generated/scheduleGenApi.ts";
import type {WorkDay} from "../model/types/WorkDay.ts";

export class ScheduleApi {
  static async getMonthSchedule(year: number, month: number): Promise<WorkDay[]> {
    const res = await getMonthSchedule({year, month})

    return res.map(i =>
      ({
        id: i.id,
        date: new Date(i.date),
        isAvailable: i.isAvailable
      })
    )
  }
}
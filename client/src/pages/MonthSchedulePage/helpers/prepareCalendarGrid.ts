import type { WorkDay } from '@/entities/schedule/model/types/WorkDay.ts'

export const prepareCalendarGrid = (
  year: number,
  month: number,
  workDays?: WorkDay[]
) => {
  if (!workDays || workDays.length === 0) {
    return undefined
  }

  const day = new Date(year, month, 1).getDay()
  const indent = day === 0 ? 6 : day - 1

  const indentArr = Array.from({ length: indent }, () => null)

  return [...indentArr, ...workDays]
}

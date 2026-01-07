import { useQuery } from '@tanstack/react-query'
import { ScheduleApi } from '@/entities/schedule/api/ScheduleApi.ts'
import { queryKeys } from '@/shared/consts/queryKeys.ts'

export const useTimeSlots = (workDayId?: number) => {
  const query = useQuery({
    queryKey: [queryKeys.TIME_SLOTS],
    queryFn: () => ScheduleApi.getTimeSlots(workDayId!),
    enabled: !!workDayId,
  })

  return {
    slots: query.data,
  }
}

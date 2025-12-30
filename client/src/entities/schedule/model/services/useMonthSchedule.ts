import { useQuery } from '@tanstack/react-query'
import { queryKeys } from '@/shared/consts/queryKeys.ts'
import { ScheduleApi } from '../../api/ScheduleApi.ts'

export interface MonthScheduleProps {
  year: number
  month: number
}

export const useMonthSchedule = (props?: MonthScheduleProps) => {
  const query = useQuery({
    queryKey: [queryKeys.SCHEDULE_MONTH, props],
    queryFn: () => {
      if (!props) {
        return undefined
      }

      return ScheduleApi.getMonthSchedule(props.year, props.month)
    },
    enabled: !!props,
  })

  return {
    schedule: query.data,
  }
}

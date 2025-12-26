import {useQuery} from "@tanstack/react-query";
import {ScheduleApi} from "../../api/ScheduleApi.ts";
import {queryKeys} from "../../../../shared/consts/queryKeys.ts";

interface MonthScheduleProps {
  year: number
  month: number
}

export const useMonthSchedule = (props: MonthScheduleProps) => {
  const query = useQuery({
    queryKey: [queryKeys.SCHEDULE_MONTH, props],
    queryFn: () => ScheduleApi.getMonthSchedule(props.year, props.month)
  })

  return {
    schedule: query.data
  }
}
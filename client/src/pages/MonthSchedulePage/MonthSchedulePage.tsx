import {useMonthSchedule} from "../../entities/schedule/model/services/useMonthSchedule.ts";
import {useSearchParams} from "react-router";
import {useMemo} from "react";

const MonthSchedulePage = () => {
  const [searchParams] = useSearchParams()

  const month = useMemo(() => {
    return {
      month: 12,
      year: 2025
    }
  }, [searchParams])

  const {schedule} = useMonthSchedule(month)

  console.log(schedule)

  return (
    <div>
      MonthSchedulePage
    </div>
  );
};

export default MonthSchedulePage;
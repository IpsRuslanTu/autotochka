import { useMemo } from 'react'
import { useSearchParams } from 'react-router'
import { useMonthSchedule } from '@/entities/schedule'

const MonthSchedulePage = () => {
  const [searchParams] = useSearchParams()

  const month = useMemo(() => {
    return {
      month: 12,
      year: 2025,
    }
  }, [searchParams])

  const { schedule } = useMonthSchedule(month)

  console.log(schedule)

  return <div>MonthSchedulePage</div>
}

export default MonthSchedulePage

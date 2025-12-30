import type { WorkDay } from '@/entities/schedule'
import { dayTitles } from '../consts/consts.ts'
import { CalendarButton } from './CalendarButton.tsx'

interface WorkdayCalendarProps {
  calendar: (WorkDay | null)[]
}

const WorkdayCalendar = (props: WorkdayCalendarProps) => {
  const { calendar } = props

  return (
    <div className='grid grid-cols-7 gap-2 sm:gap-4 max-w-lg w-full'>
      {dayTitles.map((i) => (
        <div
          key={i}
          className='bg-blue-200 font-bold text-blue-800 rounded-lg p-2 sm:p-4 text-center'
        >
          {i}
        </div>
      ))}
      {calendar.map((day, idx) =>
        day ? (
          <CalendarButton
            key={idx}
            date={day.date}
            isAvailable={day.isAvailable}
          />
        ) : (
          <div key={idx}></div>
        )
      )}
    </div>
  )
}

export default WorkdayCalendar

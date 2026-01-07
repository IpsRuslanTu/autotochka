import { Link } from 'react-router-dom'

interface CalendarButtonProps {
  workDayId: number
  dateNum: number
  isAvailable: boolean
}

export const CalendarButton = (props: CalendarButtonProps) => {
  const { workDayId, dateNum, isAvailable } = props

  if (isAvailable) {
    return (
      <Link
        to={`/schedule/${workDayId}/slots`}
        className='shadow rounded-lg p-2 sm:p-4 text-center bg-white hover:bg-blue-50 text-gray-700'
      >
        <span className='font-semibold text-gray-700'>{dateNum}</span>
      </Link>
    )
  }

  return (
    <div className='shadow rounded-lg p-2 sm:p-4 text-center bg-gray-600 text-gray-400 cursor-not-allowed'>
      <span className='font-semibold text-gray-700'>{dateNum}</span>
    </div>
  )
}

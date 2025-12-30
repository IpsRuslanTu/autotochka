import clsx from 'clsx'

interface CalendarButtonProps {
  date: Date
  isAvailable: boolean
}

export const CalendarButton = (props: CalendarButtonProps) => {
  const { date, isAvailable } = props

  const handleClick = () => {
    // router(`/schedule/${year}-${month + 1}-${day}`)
  }

  return (
    <button
      onClick={isAvailable ? handleClick : undefined}
      className={clsx(
        'shadow rounded-lg p-2 sm:p-4 text-center transition-colors',
        {
          'bg-gray-200 text-gray-400 cursor-not-allowed': !isAvailable,
          'bg-white hover:bg-blue-50 text-gray-700': isAvailable,
        }
      )}
    >
      <span className='font-semibold text-gray-700'>{date.getDate()}</span>
    </button>
  )
}

import { useParams } from 'react-router-dom'
import { useTimeSlots } from '@/entities/schedule'

const TimeSlotsPage = () => {
  const { workDayId } = useParams()

  const { slots } = useTimeSlots(Number(workDayId))

  const handleClick = (slotId: number) => {
    alert(slotId)
  }

  return (
    <div className='h-full w-full flex items-center justify-center p-6'>
      <div className='w-full grid grid-cols-[repeat(auto-fill,minmax(80px,1fr))] gap-5'>
        {slots?.map((i) => (
          <button
            key={i.time}
            className='rounded-lg bg-white text-gray-700 py-2 disabled:opacity-50'
            disabled={!i.isAvailable}
            onClick={() => handleClick(i.id)}
          >
            {i.time}
          </button>
        ))}
      </div>
    </div>
  )
}

export default TimeSlotsPage

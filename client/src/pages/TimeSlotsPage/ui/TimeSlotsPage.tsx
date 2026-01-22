import { useParams } from 'react-router-dom'
import { useTimeSlots } from '@/entities/schedule'
import { useCreateBooking } from '@/features/createBooking/model/services/useCreateBooking.ts'
import { toast } from 'react-toastify'

const TimeSlotsPage = () => {
  const { workDayId } = useParams()

  const { slots } = useTimeSlots(Number(workDayId))

  const onSuccess = () => {
    toast.success('Бронирование успешно создано!')
  }
  const { createBooking } = useCreateBooking(onSuccess, () => toast.error('Не удалось создать бронирование'))

  const handleClick = (slotId: number) => {
    createBooking(slotId)
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

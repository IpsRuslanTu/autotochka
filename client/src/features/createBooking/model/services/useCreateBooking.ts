import { useMutation } from '@tanstack/react-query'
import { BookingApi } from '@/entities/booking/api/BookingApi.ts'

export const useCreateBooking = (onSuccess: () => void, onError: () => void) => {
  const mutation = useMutation({
    mutationFn: BookingApi.create,
    onSuccess,
    onError,
  })

  return {
    createBooking: mutation.mutate,
  }
}

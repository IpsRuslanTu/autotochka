import { createBooking } from '@/shared/api/generated/bookingGenApi.ts'

export class BookingApi {
  static async create(timeSlotId: number) {
    await createBooking({ timeSlotId })
  }
}

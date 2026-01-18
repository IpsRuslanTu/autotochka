import { Booking } from '@/modules/booking/domain/entities/booking.entity'

export const BOOKING_REPOSITORY = 'BOOKING_REPOSITORY'

export interface BookingRepository {
  save(userId: string, timeSlotId: number): Promise<Booking>
}

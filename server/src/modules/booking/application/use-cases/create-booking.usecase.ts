import { Inject, Injectable } from '@nestjs/common'
import { Booking } from '../../domain/entities/booking.entity'
import { BOOKING_REPOSITORY, type BookingRepository } from '../../domain/repositories/booking.repository'

@Injectable()
export class CreateBookingUsecase {
  constructor(
    @Inject(BOOKING_REPOSITORY)
    private readonly bookingRepository: BookingRepository
  ) {}

  async execute(userId: string, timeSlotId: number): Promise<Booking> {
    return await this.bookingRepository.save(userId, timeSlotId)
  }
}

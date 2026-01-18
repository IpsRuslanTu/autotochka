import { IsInt } from 'class-validator'

export class CreateBookingRequestDto {
  @IsInt()
  timeSlotId: number
}

import { IsInt } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'

export class CreateBookingRequestDto {
  @IsInt()
  @ApiProperty()
  timeSlotId: number
}

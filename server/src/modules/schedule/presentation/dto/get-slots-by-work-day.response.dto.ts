import { ApiProperty } from '@nestjs/swagger'

export class GetSlotsSlotByWorkDayDto {
  @ApiProperty()
  id: number

  @ApiProperty()
  time: string

  @ApiProperty()
  isAvailable: boolean
}

import { IsInt, Max, Min } from 'class-validator'
import { Type } from 'class-transformer'
import { ApiProperty } from '@nestjs/swagger'

export class GetMonthScheduleRequestDto {
  @ApiProperty({ description: 'Year (2025–2100)' })
  @Type(() => Number)
  @IsInt()
  @Min(2025)
  @Max(2100)
  year: number

  @ApiProperty({ description: 'Month (1–12)' })
  @Type(() => Number)
  @IsInt()
  @Min(1)
  @Max(12)
  month: number
}

import {ApiProperty} from "@nestjs/swagger";

export class GetMonthScheduleResponseDto {
  @ApiProperty()
  id: number;

  @ApiProperty({ example: '2025-12-25', format: 'date' })
  date: string;

  @ApiProperty()
  isAvailable: boolean;
}
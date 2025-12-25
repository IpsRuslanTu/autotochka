import {IsInt, Max, Min} from "class-validator";
import { Type } from 'class-transformer';

export class GetMonthScheduleRequestDto {
  @Type(() => Number)
  @IsInt()
  @Min(2020)
  @Max(2100)
  year: number;

  @Type(() => Number)
  @IsInt()
  @Min(1)
  @Max(12)
  month: number;
}

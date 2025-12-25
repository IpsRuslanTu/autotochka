import {Controller, Get, Query} from '@nestjs/common';
import { GetMonthScheduleResponseDto } from './dto/get-month-schedule.response.dto';
import {GetMonthScheduleRequestDto} from "./dto/get-month-schedule.request.dto";
import {GetMonthScheduleUseCase} from "@/modules/schedule/application/use-cases/get-month-schedule.usecase";

@Controller('schedule')
export class ScheduleController {
  constructor(
    private readonly getMonthScheduleUseCase: GetMonthScheduleUseCase,
  ) {}

  @Get()
  async getMonthSchedule(@Query() query: GetMonthScheduleRequestDto): Promise<GetMonthScheduleResponseDto[]> {
    const days = await this.getMonthScheduleUseCase.execute(query.year, query.month);

    return days.map(d => ({
      id: d.id,
      date: d.date.toISOString().split('T')[0],
      isAvailable: d.isAvailable,
    }));
  }
}
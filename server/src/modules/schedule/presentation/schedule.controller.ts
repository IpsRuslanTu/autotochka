import {Controller, Get} from '@nestjs/common';
import { GetMonthScheduleResponseDto } from './dto/get-month-schedule.response.dto';
import {GetMonthScheduleRequestDto} from "./dto/get-month-schedule.request.dto";
import {GetMonthScheduleUseCase} from "../application/use-cases/get-month-schedule.usecase";
import {ApiOperation, ApiQuery, ApiResponse} from "@nestjs/swagger";

@Controller('api/schedule')
export class ScheduleController {
  constructor(
    private readonly getMonthScheduleUseCase: GetMonthScheduleUseCase,
  ) {}

  @Get()
  @ApiOperation({
    operationId: 'getMonthSchedule'
  })
  @ApiQuery({ type: GetMonthScheduleRequestDto })
  @ApiResponse({
    status: 200,
    type: [GetMonthScheduleResponseDto],
  })
  async getMonthSchedule(query: GetMonthScheduleRequestDto): Promise<GetMonthScheduleResponseDto[]> {
    const days = await this.getMonthScheduleUseCase.execute(query.year, query.month);

    return days.map(d => ({
      id: d.id,
      date: d.date.toISOString().split('T')[0],
      isAvailable: d.isAvailable,
    }));
  }
}
import { Controller, Get, Query } from '@nestjs/common'
import { GetMonthScheduleResponseDto } from './dto/get-month-schedule.response.dto'
import { GetMonthScheduleRequestDto } from './dto/get-month-schedule.request.dto'
import { GetMonthScheduleUseCase } from '../application/use-cases/get-month-schedule.usecase'
import { ApiOperation, ApiResponse } from '@nestjs/swagger'

@Controller('api/schedule')
export class ScheduleController {
  constructor(
    private readonly getMonthScheduleUseCase: GetMonthScheduleUseCase
  ) {}

  @Get()
  @ApiOperation({
    operationId: 'getMonthSchedule',
  })
  @ApiResponse({
    status: 200,
    type: [GetMonthScheduleResponseDto],
  })
  async getMonthSchedule(
    @Query() query: GetMonthScheduleRequestDto
  ): Promise<GetMonthScheduleResponseDto[]> {
    const days = await this.getMonthScheduleUseCase.execute(
      query.year,
      query.month
    )

    return days.map((d) => ({
      id: d.id,
      date: d.date.toISOString(),
      isAvailable: d.isAvailable,
    }))
  }
}

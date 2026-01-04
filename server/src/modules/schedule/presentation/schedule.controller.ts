import { Controller, Get, Param, ParseIntPipe, Query } from '@nestjs/common'
import { ApiOperation, ApiResponse } from '@nestjs/swagger'
import { GetMonthScheduleResponseDto } from './dto/get-month-schedule.response.dto'
import { GetMonthScheduleRequestDto } from './dto/get-month-schedule.request.dto'
import { GetSlotsSlotByWorkDayDto } from './dto/get-slots-by-work-day.response.dto'
import { GetMonthScheduleUseCase } from '../application/use-cases/get-month-schedule.usecase'
import { GetSlotsByWorkDayUsecase } from '../application/use-cases/get-slots-by-work-day.usecase'

@Controller('api/schedule')
export class ScheduleController {
  constructor(
    private readonly getMonthScheduleUseCase: GetMonthScheduleUseCase,
    private readonly getSlotsByWorkDayUsecase: GetSlotsByWorkDayUsecase
  ) {}

  @Get(':workDayId/slots')
  async getSlotsByWorkDayId(@Param('workDayId', ParseIntPipe) workDayId: number): Promise<GetSlotsSlotByWorkDayDto[]> {
    const slots = await this.getSlotsByWorkDayUsecase.execute(workDayId)

    return slots.map((i) => ({
      id: i.id,
      time: i.time,
      isAvailable: i.isAvailable,
    }))
  }

  @Get()
  @ApiOperation({
    operationId: 'getMonthSchedule',
  })
  @ApiResponse({
    status: 200,
    type: [GetMonthScheduleResponseDto],
  })
  async getMonthSchedule(@Query() query: GetMonthScheduleRequestDto): Promise<GetMonthScheduleResponseDto[]> {
    const days = await this.getMonthScheduleUseCase.execute(query.year, query.month)

    return days.map((d) => ({
      id: d.id,
      date: d.date.toISOString(),
      isAvailable: d.isAvailable,
    }))
  }
}

import { type Request } from 'express'
import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common'
import { JwtAuthGuard } from '@/application/auth/guards/jwt-auth.guard'
import { CreateBookingUsecase } from '../application/use-cases/create-booking.usecase'
import { CreateBookingRequestDto } from './dto/create-booking.request.dto'
import { ApiOperation, ApiResponse } from '@nestjs/swagger'

@Controller('api/booking')
@UseGuards(JwtAuthGuard)
export class BookingController {
  constructor(private readonly createBookingUsecase: CreateBookingUsecase) {}

  @Post()
  @ApiOperation({
    operationId: 'create',
  })
  @ApiResponse({
    status: 200,
  })
  async create(@Body() dto: CreateBookingRequestDto, @Req() req: Request) {
    const userId = req.user.id
    await this.createBookingUsecase.execute(userId, dto.timeSlotId)
  }
}

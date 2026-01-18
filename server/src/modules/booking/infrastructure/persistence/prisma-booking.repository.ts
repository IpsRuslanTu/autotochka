import { PrismaService } from '@/infrastructure/prisma/prisma.service'
import { BookingRepository } from '../../domain/repositories/booking.repository'
import { Injectable } from '@nestjs/common'

@Injectable()
export class PrismaBookingRepository implements BookingRepository {
  constructor(private readonly prisma: PrismaService) {}

  async save(userId: string, timeSlotId: number) {
    return await this.prisma.booking.create({
      data: {
        userId: userId,
        timeSlotId: timeSlotId,
        createdAt: new Date(),
      },
    })
  }
}

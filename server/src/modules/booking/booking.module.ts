import { Module } from '@nestjs/common'
import { PrismaModule } from '@/infrastructure/prisma/prisma.module'
import { BookingController } from './presentation/booking.controller'
import { CreateBookingUsecase } from './application/use-cases/create-booking.usecase'
import { BOOKING_REPOSITORY } from './domain/repositories/booking.repository'
import { PrismaBookingRepository } from './infrastructure/persistence/prisma-booking.repository'

@Module({
  imports: [PrismaModule],
  controllers: [BookingController],
  providers: [
    CreateBookingUsecase,
    {
      provide: BOOKING_REPOSITORY,
      useClass: PrismaBookingRepository,
    },
  ],
})
export class BookingModule {}

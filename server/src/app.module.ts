import { Module } from '@nestjs/common'
import { JwtModule } from '@nestjs/jwt'
import { AuthModule } from '@/application/auth/auth.module'
import { BookingModule } from '@/modules/booking/booking.module'
import { ScheduleModule } from '@/modules/schedule/schedule.module'
import { TelegramModule } from '@/modules/telegram/telegram.module'
import { PrismaModule } from './infrastructure/prisma/prisma.module'

@Module({
  imports: [
    PrismaModule,
    JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '7d' },
    }),
    AuthModule,
    ScheduleModule,
    TelegramModule,
    BookingModule,
  ],
})
export class AppModule {}

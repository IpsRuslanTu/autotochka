import { Module } from '@nestjs/common'
import { JwtModule } from '@nestjs/jwt'
import { ScheduleModule } from '@/modules/schedule/schedule.module'
import { TelegramModule } from '@/modules/telegram/telegram.module'
import { PrismaModule } from './infrastructure/prisma/prisma.module'

@Module({
  imports: [
    PrismaModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET || 'test-secret-key',
      signOptions: { expiresIn: '7d' },
    }),
    ScheduleModule,
    TelegramModule,
  ],
})
export class AppModule {}

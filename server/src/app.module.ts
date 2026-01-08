import { Module } from '@nestjs/common'
import { ScheduleModule } from '@/modules/schedule/schedule.module'
import { TelegramModule } from '@/modules/telegram/telegram.module'

@Module({
  imports: [ScheduleModule, TelegramModule],
})
export class AppModule {}

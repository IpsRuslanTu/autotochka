import { Module } from '@nestjs/common'
import { TelegramController } from './presentation/telegram.controller'
import { HandleTelegramMessageUsecase } from './application/use-cases/handle-telegram-message.usecase'
import { TelegramApiService } from './infrastructure/telegram-api.service'
import { TELEGRAM_API } from './domain/repositories/telegram-api.interface'
import { UserModule } from '@/core/user/user.module'

@Module({
  imports: [UserModule],
  controllers: [TelegramController],
  providers: [
    HandleTelegramMessageUsecase,
    {
      provide: TELEGRAM_API,
      useClass: TelegramApiService,
    },
  ],
})
export class TelegramModule {}

import { Inject, Injectable } from '@nestjs/common'
import { TELEGRAM_API, type TelegramApi } from '../../domain/repositories/telegram-api.interface'
import { EnsureUserUsecase } from '@/application/auth/use-cases/ensure-user.usecase'

@Injectable()
export class HandleTelegramMessageUsecase {
  constructor(
    @Inject(TELEGRAM_API)
    private telegramApi: TelegramApi,
    private ensureUserUsecase: EnsureUserUsecase
  ) {}

  async execute(chatId: number, text: string): Promise<void> {
    if (text === '/start') {
      await this.telegramApi.sendMessage(chatId, 'Привет! Нажмите кнопку, чтобы передать номер телефона:', {
        replyMarkup: {
          keyboard: [
            [
              {
                text: 'Передать номер',
                request_contact: true,
              },
            ],
          ],
          resize_keyboard: true,
          one_time_keyboard: true,
        },
      })
    } else {
      await this.telegramApi.sendMessage(chatId, 'Я понимаю только команду /start')
    }
  }

  async handleContact(chatId: number, phoneNumber: string): Promise<void> {
    await this.ensureUserUsecase.execute(String(chatId), phoneNumber)

    await this.telegramApi.sendMessage(chatId, 'Теперь вы можете открыть приложение:', {
      replyMarkup: {
        inline_keyboard: [
          [
            {
              text: 'Открыть приложение',
              web_app: {
                url: 'https://autotochka.vercel.app',
              },
            },
          ],
        ],
      },
    })
  }
}

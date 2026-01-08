import { TelegramApi } from '../../domain/repositories/telegram-api.interface'

export class HandleTelegramMessageUsecase {
  constructor(private telegramApi: TelegramApi) {}

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
    console.log(phoneNumber)

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

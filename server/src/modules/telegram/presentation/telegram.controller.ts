import { Body, Controller, Post } from '@nestjs/common'
import { HandleTelegramMessageUsecase } from '../application/use-cases/handle-telegram-message.usecase'
import type { TelegramUpdate } from '../domain/types/telegram.types'

@Controller('api/telegram')
export class TelegramController {
  constructor(private usecase: HandleTelegramMessageUsecase) {}

  @Post('login')
  login(@Body('initData') initData: string) {
    console.log(initData)
  }

  @Post()
  async handleWebhook(@Body() update: TelegramUpdate) {
    const message = update.message

    if (message?.text && message?.chat?.id) {
      await this.usecase.execute(message.chat.id, message.text)
    } else if (update.message?.contact && update.message?.chat?.id) {
      const { contact, chat } = update.message
      if (contact.phone_number) {
        await this.usecase.handleContact(chat.id, contact.phone_number)
      }
    }
    return { ok: true }
  }
}

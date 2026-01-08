import axios from 'axios'
import { Injectable } from '@nestjs/common'
import { TelegramApi } from '../domain/repositories/telegram-api.interface'
import { ReplyMarkup } from '../domain/types/telegram.types'

@Injectable()
export class TelegramApiService implements TelegramApi {
  private url = 'https://api.telegram.org/bot'
  private readonly token: string

  constructor() {
    this.token = process.env.TELEGRAM_BOT_TOKEN!
  }

  async sendMessage(chatId: number, text: string, options?: { replyMarkup?: ReplyMarkup }): Promise<void> {
    await axios.post(`${this.url}${this.token}/sendMessage`, {
      chat_id: chatId,
      text,
      reply_markup: options?.replyMarkup,
    })
  }
}

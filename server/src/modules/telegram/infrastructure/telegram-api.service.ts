import axios from 'axios'
import { Injectable } from '@nestjs/common'
import { TelegramApi } from '../domain/repositories/telegram-api.interface'

@Injectable()
export class TelegramApiService implements TelegramApi {
  private url = 'https://api.telegram.org/bot'
  private readonly token: string

  constructor() {
    this.token = process.env.TELEGRAM_BOT_TOKEN!
  }

  async sendMessage(chatId: number, text: string): Promise<void> {
    await axios.post(`${this.url}${this.token}/sendMessage`, { chat_id: chatId, text })
  }
}

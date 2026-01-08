import { ReplyMarkup } from '../types/telegram.types'

export const TELEGRAM_API = 'TELEGRAM_API'
export interface TelegramApi {
  sendMessage(
    chatId: number,
    text: string,
    options?: {
      replyMarkup?: ReplyMarkup
    }
  ): Promise<void>
}

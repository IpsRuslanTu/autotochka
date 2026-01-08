export const TELEGRAM_API = 'TELEGRAM_API'
export interface TelegramApi {
  sendMessage(
    chatId: number,
    text: string,
    options?: {
      replyMarkup?: any
    }
  ): Promise<void>
}

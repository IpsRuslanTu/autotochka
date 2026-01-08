export interface TelegramChat {
  id: number
}

export interface TelegramContact {
  phone_number: string
}

export interface TelegramMessage {
  chat?: TelegramChat
  text?: string
  contact?: TelegramContact
}

export interface TelegramUpdate {
  message?: TelegramMessage
}

export type ReplyKeyboardButton = {
  text: string
  request_contact?: boolean
}

export type InlineKeyboardButton = {
  text: string
  web_app?: { url: string }
}

export type ReplyMarkup =
  | { keyboard: ReplyKeyboardButton[][]; resize_keyboard?: boolean; one_time_keyboard?: boolean }
  | { inline_keyboard: InlineKeyboardButton[][] }

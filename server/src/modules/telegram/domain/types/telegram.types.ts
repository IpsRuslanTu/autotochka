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

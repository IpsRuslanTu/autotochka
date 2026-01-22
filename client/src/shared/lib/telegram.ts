export interface TelegramWebApp {
  initData: string
  initDataUnsafe: {
    user?: {
      id: number
      first_name: string
      last_name?: string
      username?: string
      phone_number?: string
    }
    query_id?: string
    auth_date: number
  }
  ready: () => void
}

export const hasTelegramUser = (): boolean => {
  return !!window.Telegram?.WebApp?.initDataUnsafe?.user
}

export const getTelegramUser = () => {
  if (hasTelegramUser()) {
    return window.Telegram.WebApp.initDataUnsafe?.user || null
  }
  return null
}

export const getTelegramInitData = () => {
  if (hasTelegramUser()) {
    return window.Telegram.WebApp.initData
  }
  return null
}

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

export const isTelegramWebApp = (): boolean => {
  return typeof window !== 'undefined' && (window as any).Telegram?.WebApp !== undefined
}

export const getTelegramUser = () => {
  if (isTelegramWebApp()) {
    return (window as any).Telegram.WebApp.initDataUnsafe?.user || null
  }
  return null
}

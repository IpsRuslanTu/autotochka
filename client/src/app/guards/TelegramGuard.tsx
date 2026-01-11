import { type ReactNode } from 'react'
import { hasTelegramUser } from '@/shared/lib/telegram.ts'

export const TelegramGuard = ({ children }: { children: ReactNode }) => {
  const telegramUser = hasTelegramUser()

  if (!telegramUser) {
    return (
      <div className='min-h-screen flex flex-col items-center justify-center bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100'>
        <div className='text-center max-w-md'>
          <h1 className='text-2xl font-bold mb-4'>Требуется вход через Telegram</h1>
        </div>
      </div>
    )
  }

  return <>{children}</>
}

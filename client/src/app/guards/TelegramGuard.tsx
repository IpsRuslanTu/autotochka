import { type ReactNode } from 'react'
import { isTelegramWebApp } from '@/shared/lib/telegram.ts'

export const TelegramGuard = ({ children }: { children: ReactNode }) => {
  const inTelegram = isTelegramWebApp()

  if (!inTelegram) {
    return (
      <div className='min-h-screen flex flex-col items-center justify-center bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100'>
        <div className='text-center max-w-md'>
          <h1 className='text-2xl font-bold mb-4'>Требуется Telegram</h1>
          <p className='mb-6'>Это приложение работает только внутри Telegram.</p>
        </div>
      </div>
    )
  }

  return <>{children}</>
}

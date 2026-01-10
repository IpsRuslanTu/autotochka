import { useEffect, useState } from 'react'

export const TelegramGuard = ({ children }: { children: React.ReactNode }) => {
  const [isReady, setIsReady] = useState(false)
  const [isInTelegram, setIsInTelegram] = useState(false)

  useEffect(() => {
    let isCancelled = false

    const checkTelegram = () => {
      if ((window as any).Telegram?.WebApp) {
        if (!isCancelled) {
          setIsInTelegram(true)
          setIsReady(true)
          ;(window as any).Telegram.WebApp.ready()
        }
        return
      }

      setTimeout(checkTelegram, 50)
    }

    checkTelegram()

    return () => {
      isCancelled = true
    }
  }, [])

  if (!isReady) {
    return null
  }

  if (!isInTelegram) {
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

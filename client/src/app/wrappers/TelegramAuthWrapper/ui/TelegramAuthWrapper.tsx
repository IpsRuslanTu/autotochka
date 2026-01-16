import { type ReactNode, useEffect, useState } from 'react'
import { useTelegramLogin } from '@/entities/auth'
import { localStorageConsts } from '@/shared/consts/localStorageConsts.ts'
import { getTelegramInitData } from '@/shared/lib/telegram.ts'

export const TelegramAuthWrapper = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null)
  const { login, isLoading } = useTelegramLogin()

  useEffect(() => {
    const init = async () => {
      const token = localStorage.getItem(localStorageConsts.ACCESS_TOKEN)

      if (token) {
        setIsAuthenticated(true)
        return
      }

      const initData = getTelegramInitData()
      if (initData) {
        try {
          const resToken = await login(initData)
          localStorage.setItem(localStorageConsts.ACCESS_TOKEN, resToken)
          setIsAuthenticated(true)
        } catch (error) {
          setIsAuthenticated(false)
        }
        return
      }
      setIsAuthenticated(false)
    }

    init()
  }, [])

  if (isAuthenticated === null || isLoading) {
    return (
      <div className='min-h-screen flex items-center justify-center'>
        <div>Загрузка...</div>
      </div>
    )
  }

  if (!isAuthenticated) {
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

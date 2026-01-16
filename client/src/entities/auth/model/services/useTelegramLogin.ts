import { useMutation } from '@tanstack/react-query'
import { AuthApi } from '@/entities/auth/api/AuthApi.ts'

export const useTelegramLogin = () => {
  const mutation = useMutation({
    mutationFn: (tgData: string) => AuthApi.loginByTelegram(tgData),
  })

  return {
    login: mutation.mutateAsync,
    isLoading: mutation.isPending,
  }
}

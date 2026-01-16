import { loginByTelegram } from '@/shared/api/generated/authGenApi.ts'

export class AuthApi {
  static async loginByTelegram(tgInitData: string): Promise<string> {
    const res = await loginByTelegram({ initData: tgInitData })

    return res.accessToken
  }
}

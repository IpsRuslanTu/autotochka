import { UserService } from '@/core/user/application/services/user.service'
import { JwtService } from '@nestjs/jwt'
import { Injectable, UnauthorizedException } from '@nestjs/common'
import { createHmac } from 'node:crypto'

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService
  ) {}

  async loginByTelegram(initData: string) {
    const userId = this.verifyInitData(initData, process.env.TELEGRAM_BOT_TOKEN!)
    if (!userId) {
      throw new UnauthorizedException()
    }

    const user = await this.userService.findByTelegram(String(userId))
    if (!user) {
      throw new UnauthorizedException('User not found')
    }

    const payload = { sub: user.id, phone: user.phoneNumber }
    const accessToken = this.jwtService.sign(payload)

    return { accessToken }
  }

  private verifyInitData(initData: string, botToken: string): string | null {
    try {
      const searchParams = new URLSearchParams(initData)
      const hash = searchParams.get('hash')

      if (!hash) {
        return null
      }

      searchParams.delete('hash')
      const dataCheckString = Array.from(searchParams.entries())
        .sort(([a], [b]) => a.localeCompare(b))
        .map(([key, value]) => `${key}=${value}`)
        .join('\n')

      const secretKey = createHmac('sha256', 'WebAppData').update(botToken).digest()

      const computedHash = createHmac('sha256', secretKey).update(dataCheckString).digest('hex')

      if (computedHash !== hash) {
        return null
      }

      const userStr = searchParams.get('user')
      if (!userStr) {
        return null
      }

      const user = JSON.parse(decodeURIComponent(userStr)) as { id: string }

      const authDate = Number(searchParams.get('auth_date'))
      if (!authDate || Date.now() / 1000 - authDate > 86400) {
        return null
      }

      return user.id
    } catch (e) {
      console.error(e)
      return null
    }
  }
}

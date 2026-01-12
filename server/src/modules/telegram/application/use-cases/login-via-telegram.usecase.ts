import { Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { UserService } from '@/core/user/application/services/user.service'

@Injectable()
export class LoginViaTelegramUsecase {
  constructor(
    private userService: UserService,
    private jwtService: JwtService
  ) {}

  async execute(telegramId: string, phoneNumber: string) {
    const user = await this.userService.findOrCreateByTelegram(telegramId, phoneNumber)

    const payload = { sub: user.id, phone: user.phoneNumber }
    const accessToken = this.jwtService.sign(payload)

    return { accessToken }
  }
}

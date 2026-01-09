import { Injectable } from '@nestjs/common'
import { EnsureUserUsecase } from '@/application/auth/use-cases/ensure-user.usecase'
import { JwtService } from '@nestjs/jwt'

@Injectable()
export class LoginViaTelegramUsecase {
  constructor(
    private ensureUserUsecase: EnsureUserUsecase,
    private jwtService: JwtService
  ) {}

  async execute(telegramId: string, phoneNumber: string) {
    const user = await this.ensureUserUsecase.execute(telegramId, phoneNumber)

    const payload = { sub: user.id, phone: user.phoneNumber }
    const accessToken = this.jwtService.sign(payload)

    return { accessToken }
  }
}

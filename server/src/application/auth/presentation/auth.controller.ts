import { Body, Controller, Post } from '@nestjs/common'
import { AuthService } from '../application/auth.service'

@Controller('api/auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('telegram')
  async loginByTelegram(@Body('initData') initData: string) {
    return this.authService.loginByTelegram(initData)
  }
}

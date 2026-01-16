import { Body, Controller, Post } from '@nestjs/common'
import { ApiBody, ApiOperation, ApiResponse } from '@nestjs/swagger'
import { LoginByTelegramResponseDto } from './dto/login-by-telegram.response.dto'
import { LoginByTelegramRequestDto } from './dto/login-by-telegram.request.dto'
import { AuthService } from '../application/auth.service'

@Controller('api/auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('telegram')
  @ApiOperation({
    operationId: 'loginByTelegram',
  })
  @ApiResponse({
    status: 200,
    type: LoginByTelegramResponseDto,
  })
  @ApiBody({
    type: LoginByTelegramRequestDto,
  })
  async loginByTelegram(@Body('initData') initData: string): Promise<LoginByTelegramResponseDto> {
    return this.authService.loginByTelegram(initData)
  }
}

import { ApiProperty } from '@nestjs/swagger'

export class LoginByTelegramRequestDto {
  @ApiProperty()
  initData: string
}

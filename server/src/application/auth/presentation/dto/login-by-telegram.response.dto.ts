import { ApiProperty } from '@nestjs/swagger'

export class LoginByTelegramResponseDto {
  @ApiProperty()
  accessToken: string
}

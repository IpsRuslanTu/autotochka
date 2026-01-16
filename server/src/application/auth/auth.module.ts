import { Module } from '@nestjs/common'
import { UserModule } from '@/core/user/user.module'
import { AuthController } from './presentation/auth.controller'
import { AuthService } from './application/auth.service'

@Module({
  imports: [UserModule],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}

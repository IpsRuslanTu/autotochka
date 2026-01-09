import { Module } from '@nestjs/common'
import { JwtModule } from '@nestjs/jwt'
import { ScheduleModule } from '@/modules/schedule/schedule.module'
import { TelegramModule } from '@/modules/telegram/telegram.module'
import { EnsureUserUsecase } from './application/auth/use-cases/ensure-user.usecase'
import { USER_REPOSITORY } from './domain/user/repositories/user.repository.interface'
import { PrismaUserRepository } from './infrastructure/persistence/prisma-user.repository'

@Module({
  imports: [
    JwtModule.register({
      secret: process.env.JWT_SECRET || 'test-secret-key',
      signOptions: { expiresIn: '7d' },
    }),
    ScheduleModule,
    TelegramModule,
  ],
  providers: [
    EnsureUserUsecase,
    {
      provide: USER_REPOSITORY,
      useClass: PrismaUserRepository,
    },
  ],
  exports: [EnsureUserUsecase],
})
export class AppModule {}

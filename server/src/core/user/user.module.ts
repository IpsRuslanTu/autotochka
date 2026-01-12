import { Module } from '@nestjs/common'
import { UserService } from './application/services/user.service'
import { USER_REPOSITORY } from '@/core/user/domain/user/repositories/user.repository.interface'
import { PrismaUserRepository } from '@/core/user/infrastructure/persistence/prisma-user.repository'
import { PrismaModule } from '@/infrastructure/prisma/prisma.module'

@Module({
  imports: [PrismaModule],
  providers: [
    UserService,
    {
      provide: USER_REPOSITORY,
      useClass: PrismaUserRepository,
    },
  ],
  exports: [UserService],
})
export class UserModule {}

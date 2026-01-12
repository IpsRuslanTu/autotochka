import { Injectable } from '@nestjs/common'
import { User } from '@/core/user/domain/user/entities/user.entity'
import { PrismaService } from '@/infrastructure/prisma/prisma.service'
import { UserRepository } from '../../domain/user/repositories/user.repository.interface'

@Injectable()
export class PrismaUserRepository implements UserRepository {
  constructor(private prisma: PrismaService) {}

  async findByTelegramId(telegramId: string): Promise<User | null> {
    const user = await this.prisma.user.findUnique({
      where: { telegramId: telegramId },
    })
    return user ? user : null
  }

  async save(user: User): Promise<User> {
    const data = {
      id: user.id,
      phoneNumber: user.phoneNumber,
      telegramId: user.telegramId,
    }

    return await this.prisma.user.upsert({
      where: { phoneNumber: user.phoneNumber },
      update: data,
      create: data,
    })
  }
}

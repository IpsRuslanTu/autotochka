import { Injectable } from '@nestjs/common'
import { User } from '@/domain/user/entities/user.entity'
import { UserRepository } from '@/domain/user/repositories/user.repository.interface'
import { PrismaService } from '../prisma/prisma.service'

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
      telegramId: user.telegramId ? user.telegramId : undefined,
    }

    return await this.prisma.user.upsert({
      where: { id: user.id },
      update: data,
      create: data,
    })
  }
}

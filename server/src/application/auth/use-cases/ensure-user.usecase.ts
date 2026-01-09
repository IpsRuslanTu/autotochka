import * as crypto from 'node:crypto'
import { Injectable } from '@nestjs/common'
import type { UserRepository } from '@/domain/user/repositories/user.repository.interface'
import { User } from '@/domain/user/entities/user.entity'

@Injectable()
export class EnsureUserUsecase {
  constructor(private userRepository: UserRepository) {}

  async execute(telegramId: string, phoneNumber: string): Promise<User> {
    let user = await this.userRepository.findByTelegramId(telegramId)

    if (!user) {
      user = new User(crypto.randomUUID(), phoneNumber, telegramId)
      return this.userRepository.save(user)
    }

    return user
  }
}

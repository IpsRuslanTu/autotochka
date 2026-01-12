import { Inject, Injectable } from '@nestjs/common'
import { USER_REPOSITORY, type UserRepository } from '../../domain/user/repositories/user.repository.interface'
import { User } from '../../domain/user/entities/user.entity'
import crypto from 'node:crypto'

@Injectable()
export class UserService {
  constructor(@Inject(USER_REPOSITORY) private userRepository: UserRepository) {}

  async findOrCreateByTelegram(telegramId: string, phoneNumber: string) {
    let user = await this.userRepository.findByTelegramId(telegramId)

    if (!user) {
      user = new User(crypto.randomUUID(), phoneNumber, telegramId)
      await this.userRepository.save(user)
    }

    return user
  }
}

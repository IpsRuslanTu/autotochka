import { User } from '../entities/user.entity'

export const USER_REPOSITORY = 'USER_REPOSITORY'

export interface UserRepository {
  findByTelegramId(telegramId: string): Promise<User | null>
  save(user: User): Promise<User>
}

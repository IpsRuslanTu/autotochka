export class User {
  constructor(
    public readonly id: string,
    public readonly phoneNumber: string,
    public readonly telegramId: string | null
  ) {}
}

export class Booking {
  constructor(
    public readonly id: number,
    public readonly createdAt: Date,
    public readonly userId: string,
    public readonly timeSlotId: number
  ) {}
}

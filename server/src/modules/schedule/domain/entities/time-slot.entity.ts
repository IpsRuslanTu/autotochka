export class TimeSlot {
  constructor(
    public readonly id: number,
    public readonly time: string,
    public readonly isAvailable: boolean,
    public readonly workDayId: number
  ) {}
}

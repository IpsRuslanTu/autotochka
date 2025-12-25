export class WorkDay {
  constructor(
    public readonly id: number,
    public readonly date: Date,
    public readonly isAvailable: boolean,
  ) {}
}
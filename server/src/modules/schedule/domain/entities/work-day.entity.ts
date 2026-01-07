import { TimeSlot } from './time-slot.entity'

export class WorkDay {
  constructor(
    public readonly id: number,
    public readonly date: Date,
    public readonly isAvailable: boolean,
    public readonly timeSlots: TimeSlot[] = []
  ) {}
}

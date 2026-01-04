import { WorkDayRepository } from '../../domain/repositories/work-day.repository'
import { NotFoundException } from '@nestjs/common'
import { TimeSlot } from '@/modules/schedule/domain/entities/time-slot.entity'

export class GetSlotsByWorkDayUsecase {
  constructor(private readonly workDayRepository: WorkDayRepository) {}

  async execute(workDayId: number): Promise<TimeSlot[]> {
    const workDay = await this.workDayRepository.findWorkDayWithSlotsById(workDayId)

    if (!workDay) {
      throw new NotFoundException(`WorkDay with id ${workDayId} not found`)
    }

    return workDay.timeSlots
  }
}

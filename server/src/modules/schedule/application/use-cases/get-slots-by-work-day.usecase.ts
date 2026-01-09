import { Inject, Injectable, NotFoundException } from '@nestjs/common'
import { WORK_DAY_REPOSITORY, type WorkDayRepository } from '../../domain/repositories/work-day.repository'
import { TimeSlot } from '@/modules/schedule/domain/entities/time-slot.entity'

@Injectable()
export class GetSlotsByWorkDayUsecase {
  constructor(
    @Inject(WORK_DAY_REPOSITORY)
    private readonly workDayRepository: WorkDayRepository
  ) {}

  async execute(workDayId: number): Promise<TimeSlot[]> {
    const workDay = await this.workDayRepository.findWorkDayWithSlotsById(workDayId)

    if (!workDay) {
      throw new NotFoundException(`WorkDay with id ${workDayId} not found`)
    }

    return workDay.timeSlots
  }
}

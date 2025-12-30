import { useSearchParams } from 'react-router'
import { WorkdayCalendar } from '@/widgets/WorkdayCalendar'
import { useMonthSchedule } from '@/entities/schedule'
import { months } from '@/shared/lib/months.ts'
import { prepareCalendarGrid } from '../helpers/prepareCalendarGrid.ts'

const MonthSchedulePage = () => {
  const now = new Date()

  const [searchParams, setSearchParams] = useSearchParams()

  const urlMonth = searchParams.get('month')
  const filters = {
    year: Number(searchParams.get('year')) || now.getFullYear(),
    month: urlMonth ? Number(urlMonth) : now.getMonth() + 1,
  }

  const { schedule } = useMonthSchedule(filters)
  const calendar = prepareCalendarGrid(filters.year, filters.month, schedule)

  const handleBack = () => {
    const params = new URLSearchParams(searchParams)

    if (filters.month - 1 < 1) {
      params.set('year', String(filters.year - 1))
      params.set('month', '12')
    } else {
      params.set('month', String(filters.month - 1))
    }

    setSearchParams(params)
  }

  const handleForward = () => {
    const params = new URLSearchParams(searchParams)

    if (filters.month + 1 > 12) {
      params.set('year', String(filters.year + 1))
      params.set('month', '1')
    } else {
      params.set('month', String(filters.month + 1))
    }

    setSearchParams(params)
  }

  return (
    <div className='h-full flex justify-center flex-col items-center p-6'>
      <h1 className='text-4xl font-bold text-blue-700 mb-2'>Автосервис Точка</h1>
      <div className='flex justify-between items-center gap-4 mb-8'>
        <button className='cursor-pointer' onClick={handleBack}>{`<`}</button>
        <h2 className='w-30 text-2xl text-gray-700 text-center capitalize'>{months[filters.month - 1]}</h2>
        <button className='cursor-pointer' onClick={handleForward}>{`>`}</button>
      </div>
      <div className='min-h-[360px] sm:min-h-[500px]'>
        {calendar && <WorkdayCalendar calendar={calendar} />}
        {!calendar && <div className='text-white'>Нет записи</div>}
      </div>
      <div className='mt-10 text-center text-gray-500'>Выберите день для записи</div>
    </div>
  )
}

export default MonthSchedulePage

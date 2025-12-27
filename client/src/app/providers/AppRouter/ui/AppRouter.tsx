import { Route, Routes } from 'react-router-dom'
import MonthSchedulePage from '@/pages/MonthSchedulePage/MonthSchedulePage.tsx'

export const AppRouter = () => {
  return (
    <Routes>
      <Route path={'/'} element={<MonthSchedulePage />} />
    </Routes>
  )
}

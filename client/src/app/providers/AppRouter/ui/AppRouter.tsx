import { Route, Routes } from 'react-router-dom'
import MonthSchedulePage from '@/pages/MonthSchedulePage/MonthSchedulePage.tsx'

const AppRouter = () => {
  return (
    <Routes>
      <Route path={'/'} element={<MonthSchedulePage />} />
    </Routes>
  )
}

export default AppRouter

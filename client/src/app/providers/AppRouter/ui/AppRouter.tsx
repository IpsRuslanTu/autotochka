import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import ContactsPageAsync from '@/pages/ContactsPage'
import MonthSchedulePageAsync from '@/pages/MonthSchedulePage'
import TimeSlotsPageAsync from '@/pages/TimeSlotsPage'
import ProfilePageAsync from '@/pages/ProfilePage'
import { routes } from '@/shared/consts/routes.ts'
import { RootLayout } from '../../../layouts/RootLayout/ui/RootLayout.tsx'

export const AppRouter = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path={routes.HOME} element={<RootLayout />}>
          <Route index element={<MonthSchedulePageAsync />} />
          <Route path={routes.TIME_SLOTS} element={<TimeSlotsPageAsync />} />
          <Route path={routes.PROFILE} element={<ProfilePageAsync />} />
          <Route path={routes.CONTACTS} element={<ContactsPageAsync />} />
        </Route>
      </Routes>
    </Suspense>
  )
}

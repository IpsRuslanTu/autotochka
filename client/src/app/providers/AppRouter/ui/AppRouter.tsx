import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import ContactsPageAsync from '@/pages/ContactsPage'
import MonthSchedulePageAsync from '@/pages/MonthSchedulePage'
import ProfilePageAsync from '@/pages/ProfilePage'
import { RootLayout } from '../../../layouts/RootLayout/ui/RootLayout.tsx'

export const AppRouter = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path='/' element={<RootLayout />}>
          <Route index element={<MonthSchedulePageAsync />} />
          <Route path='/profile' element={<ProfilePageAsync />} />
          <Route path='/contacts' element={<ContactsPageAsync />} />
        </Route>
      </Routes>
    </Suspense>
  )
}

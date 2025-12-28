import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { RootLayout } from '../../../layouts/RootLayout/ui/RootLayout.tsx'
import { MonthSchedulePage } from '@/pages'

export const AppRouter = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path='/' element={<RootLayout />}>
          <Route index element={<MonthSchedulePage />} />
        </Route>
      </Routes>
    </Suspense>
  )
}

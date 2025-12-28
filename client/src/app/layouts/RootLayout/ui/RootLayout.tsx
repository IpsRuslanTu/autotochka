import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar } from '@/widgets/Navbar'

export const RootLayout = () => {
  return (
    <div className='flex flex-col overflow-hidden h-screen'>
      <main className='flex-1'>
        <Suspense fallback={<div className='p-4 text-center'>Загрузка...</div>}>
          <Outlet />
        </Suspense>
      </main>
      <Navbar />
    </div>
  )
}

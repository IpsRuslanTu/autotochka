import { Outlet } from 'react-router-dom'
import { Navbar } from '@/widgets/Navbar'

export const RootLayout = () => {
  return (
    <div className='flex flex-col overflow-hidden h-screen'>
      <main className='flex-1'>
        <Outlet />
      </main>
      <Navbar />
    </div>
  )
}

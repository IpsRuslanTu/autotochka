import { Outlet } from 'react-router-dom'
import { Navbar } from '@/widgets/Navbar'

export const RootLayout = () => {
  return (
    <div className='flex flex-col overflow-hidden h-screen'>
      <main className='flex-1 max-w-lg w-full m-auto'>
        <Outlet />
      </main>
      <Navbar />
    </div>
  )
}

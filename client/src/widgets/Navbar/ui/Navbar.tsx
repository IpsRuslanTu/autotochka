import { Home, Settings, User } from 'lucide-react'
import { Link } from 'react-router-dom'
import { routes } from '@/shared/consts/routes.ts'

export const Navbar = () => {
  return (
    <nav className='bg-blue-500 rounded-t-lg shadow-md'>
      <div className='max-w-lg m-auto px-4 py-2 flex justify-between items-center'>
        <Link to={routes.PROFILE} className='flex flex-col items-center text-white'>
          <User size={22} />
          <span className='text-xs'>Профиль</span>
        </Link>
        <Link to={routes.HOME} className='flex flex-col items-center text-white'>
          <Home size={22} />
          <span className='text-xs'>Запись</span>
        </Link>
        <Link to={routes.CONTACTS} className='flex flex-col items-center text-white'>
          <Settings size={22} />
          <span className='text-xs'>Контакты</span>
        </Link>
      </div>
    </nav>
  )
}

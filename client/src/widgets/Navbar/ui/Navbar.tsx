import { Home, Settings, User } from 'lucide-react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav className='flex justify-center bg-blue-500 rounded-t-lg shadow-md'>
      <div className='flex justify-around items-center h-14 basis-2xl'>
        <Link to='/profile' className='flex flex-col items-center text-white'>
          <User size={22} />
          <span className='text-xs'>Профиль</span>
        </Link>
        <Link to='/' className='flex flex-col items-center text-white'>
          <Home size={22} />
          <span className='text-xs'>Запись</span>
        </Link>
        <Link to='/contacts' className='flex flex-col items-center text-white'>
          <Settings size={22} />
          <span className='text-xs'>Контакты</span>
        </Link>
      </div>
    </nav>
  )
}

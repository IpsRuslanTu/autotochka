import { getTelegramUser } from '@/shared/lib/telegram.ts'

const ProfilePage = () => {
  const user = getTelegramUser()

  if (user) {
    return (
      <div className='p-4 max-w-md mx-auto'>
        <h1 className='text-2xl font-bold mb-4'>Ваш профиль</h1>
        <div className='space-y-2'>
          <p>
            <strong>ID:</strong> {user.id}
          </p>
          <p>
            <strong>Имя:</strong> {user.first_name}
          </p>
          {user.last_name && (
            <p>
              <strong>Фамилия:</strong> {user.last_name}
            </p>
          )}
          {user.username && (
            <p>
              <strong>Username:</strong> @{user.username}
            </p>
          )}
          {user.phone_number && (
            <p>
              <strong>Телефон:</strong> {user.phone_number}
            </p>
          )}
        </div>
      </div>
    )
  }

  return <div>ProfilePage</div>
}

export default ProfilePage

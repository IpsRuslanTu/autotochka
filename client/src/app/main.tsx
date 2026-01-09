import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { TelegramGuard } from '@/app/guards/TelegramGuard.tsx'
import { AppRouter } from './providers/AppRouter'
import { ReactQueryProvider } from './providers/ReactQueryProvider'
import './styles/index.css'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <ReactQueryProvider>
      <TelegramGuard>
        <AppRouter />
      </TelegramGuard>
    </ReactQueryProvider>
  </BrowserRouter>
)

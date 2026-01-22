import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css'
import { AppRouter } from './providers/AppRouter'
import { ReactQueryProvider } from './providers/ReactQueryProvider'
import { TelegramAuthWrapper } from './wrappers/TelegramAuthWrapper'
import './styles/index.css'
import { ToastContainer } from 'react-toastify'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <ReactQueryProvider>
      <TelegramAuthWrapper>
        <AppRouter />
        <ToastContainer position='top-center' />
      </TelegramAuthWrapper>
    </ReactQueryProvider>
  </BrowserRouter>
)

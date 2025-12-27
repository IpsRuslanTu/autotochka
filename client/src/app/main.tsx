import { createRoot } from 'react-dom/client'
import './styles/index.css'
import { BrowserRouter } from 'react-router-dom'
import { ReactQueryProvider } from './providers/ReactQueryProvider'
import AppRouter from './providers/AppRouter/ui/AppRouter.tsx'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <ReactQueryProvider>
      <AppRouter />
    </ReactQueryProvider>
  </BrowserRouter>
)

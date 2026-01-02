import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { AppRouter } from './providers/AppRouter'
import { ReactQueryProvider } from './providers/ReactQueryProvider'
import './styles/index.css'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <ReactQueryProvider>
      <AppRouter />
    </ReactQueryProvider>
  </BrowserRouter>
)

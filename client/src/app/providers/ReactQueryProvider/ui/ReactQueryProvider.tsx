import { type ReactNode } from 'react'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'

interface ReactQueryProviderProps {
  children?: ReactNode
}

export const ReactQueryProvider = (props: ReactQueryProviderProps) => {
  const { children } = props

  const QueryClientInstance = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false
      },
    },
  })

  return (
    <QueryClientProvider client={QueryClientInstance}>
      {children}
    </QueryClientProvider>
  )
}

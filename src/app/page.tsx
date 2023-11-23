"use client";
import { QueryClient, QueryClientProvider } from 'react-query'
import Search from '../components/search'
const queryClient = new QueryClient()

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Search />
    </QueryClientProvider>
  )
}

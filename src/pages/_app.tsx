import type { AppProps } from 'next/app'
import '@/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className='flex flex-col h-screen items-center justify-center gap-4'>
      <Component {...pageProps} />
    </div>
  )
} 
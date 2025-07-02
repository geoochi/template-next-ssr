import type { AppProps } from 'next/app'
import Head from 'next/head'
import '@/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>template-nextV15-shadcnVcanary-tailwindcssV4</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='flex flex-col h-screen items-center justify-center gap-4'>
        <Component {...pageProps} />
      </div>
    </>
  )
}

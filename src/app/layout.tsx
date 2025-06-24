import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'template - next@15 - shadcn@canary - tailwindcss@4',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body>
        <div className='flex flex-col h-screen items-center justify-center gap-4'>
          {children}
        </div>
      </body>
    </html>
  )
}

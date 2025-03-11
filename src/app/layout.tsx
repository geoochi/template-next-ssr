import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from 'next-themes'

export const metadata: Metadata = {
  title: 'template - next@15 - shadcn@canary - tailwindcss@4',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={`antialiased`}>
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
          <div className='flex flex-col h-screen items-center justify-center gap-4'>{children}</div>
        </ThemeProvider>
      </body>
    </html>
  )
}

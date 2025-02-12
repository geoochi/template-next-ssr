'use client'

import { useTheme } from 'next-themes'
import { Button } from '@/components/ui/button'
import { useEffect, useState } from 'react'

export default function Home() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className='flex flex-col h-screen items-center justify-center gap-4'>
        <p className='text-3xl'>
          template - next@15 - shadcn@canary - tailwindcss@4
        </p>
      </div>
    )
  }

  return (
    <div className='flex flex-col h-screen items-center justify-center gap-4'>
      <p className='text-3xl'>
        template - next@15 - shadcn@canary - tailwindcss@4
      </p>
      <div className='flex gap-2'>
        <Button onClick={() => setTheme('light')}>Light</Button>
        <Button onClick={() => setTheme('dark')}>Dark</Button>
        <Button onClick={() => setTheme('system')}>System</Button>
      </div>
      <p className='text-sm'>Current theme: {theme}</p>
    </div>
  )
}

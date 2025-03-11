'use client'

import { useTheme } from 'next-themes'
import { Button } from '@/components/ui/button'
import { SunIcon, MoonIcon } from 'lucide-react'
import Link from 'next/link'

const Home: React.FC = () => {
  const { theme, setTheme } = useTheme()

  return (
    <>
      <p className='text-3xl'>template - next@15 - shadcn@canary - tailwindcss@4</p>
      <Button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} variant='ghost' size='icon'>
        {theme === 'light' ? <SunIcon /> : <MoonIcon />}
      </Button>
      <Link href='./about'>→ About Page</Link>
    </>
  )
}

export default Home

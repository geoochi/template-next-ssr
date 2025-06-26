'use client'
import Link from 'next/link'
import { SunIcon, MoonIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import useTheme from '@/hooks/use-theme'

const Home: React.FC = () => {
  const { theme, setTheme } = useTheme()

  return (
    <>
      <p className='text-3xl'>template - next@15 - shadcn@canary - tailwindcss@4</p>
      <Button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} variant='ghost' size='icon'>
        {theme === 'light' ? <SunIcon /> : <MoonIcon />}
      </Button>
      <Link href='./about'>→ About Page</Link>
      <p>NEXT_PUBLIC_KEY: {process.env.NEXT_PUBLIC_KEY}</p>
    </>
  )
}

export default Home

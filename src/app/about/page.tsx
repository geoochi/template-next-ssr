'use client'
import Link from 'next/link'
import { useState } from 'react'
import { Button } from '@/components/ui/button'

const About: React.FC = () => {
  const [randomNum, setRandomNum] = useState(0)
  const fetchRandomNum = () => {
    fetch('/api/get-random-num')
      .then((res) => res.json())
      .then((data) => setRandomNum(data.res))
  }
  return (
    <>
      <p className='text-4xl'>About Page</p>
      <Link href='./'>← Home Page</Link>
      <Button onClick={() => fetchRandomNum()}>reset randomNum</Button>
      <p>randomNum: {randomNum}</p>
    </>
  )
}

export default About

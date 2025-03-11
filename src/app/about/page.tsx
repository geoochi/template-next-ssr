import Link from 'next/link'

const About: React.FC = () => {
  return (
    <>
      <p className='text-4xl'>About Page</p>
      <Link href='./'>← Home Page</Link>
    </>
  )
}

export default About

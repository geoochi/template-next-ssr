import Home from '@/components/Home'

const Index: React.FC = () => {
  return (
    <>
      <Home></Home>
      <p>PRIVATE_KEY: {process.env.PRIVATE_KEY || 'Not found'}</p>
    </>
  )
}

export default Index

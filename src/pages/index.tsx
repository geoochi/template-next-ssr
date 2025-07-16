import Home from '@/components/Home'

export async function getServerSideProps() {
  const hasPrivateKey = !!process.env.PRIVATE_KEY
  return { props: { hasPrivateKey } }
}

const Index: React.FC<{ hasPrivateKey: boolean }> = ({ hasPrivateKey }) => {
  return (
    <>
      <Home />
      <p>PRIVATE_KEY: {hasPrivateKey ? 'OK' : 'Not found'}</p>
    </>
  )
}

export default Index

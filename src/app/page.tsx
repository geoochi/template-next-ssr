import Home from './Home'

const Page: React.FC = () => {
  return (
    <>
      <Home />
      <p>PRIVATE_KEY: {process.env.PRIVATE_KEY}</p>
    </>
  )
}

export default Page

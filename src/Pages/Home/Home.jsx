import { useProductosContext } from '@/Context/ProductosContext'
import Loader from '@/Components/Loader'
import Dashboard from '../Dashboard'
import '@/Scss/components/home/_home.scss'

const Home = () => {
  const context = useProductosContext()

  return (
    <div className='home'>
      {context.loading
        ? <Loader />
        : (
          <Dashboard />
          )}

    </div>
  )
}

export default Home

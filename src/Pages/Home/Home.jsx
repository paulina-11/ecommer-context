import VistaTodosProductos from '../VistaTodosProductos'
import { useProductosContext } from '@/Context/ProductosContext'
import ReactLoading from 'react-loading'
import '@/Scss/components/home/_home.scss'

const Home = () => {
  const context = useProductosContext()
  const Example = ({ type, color }) => (
    <ReactLoading type='cubes' color='#313c4e' height='10%' width='10%' />
  )
  return (
    <div className='home'>
      {context.loading
        ? <div className='home__loader'><Example /></div>
        : (
          <VistaTodosProductos />
          )}

    </div>
  )
}

export default Home

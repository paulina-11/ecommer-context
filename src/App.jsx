import { ProductosProvider } from './Context/ProductosContext'
import Header from '@/Components/Header'
import Routes from './Routes'

function App () {
  return (
    <div>
      <ProductosProvider>
        <Header />
        <Routes />
      </ProductosProvider>
    </div>
  )
}

export default App

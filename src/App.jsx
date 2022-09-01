import { ProductosProvider } from './Context/ProductosContext'
import Header from '@/Components/Header'
import Routes from './Routes'
import { AuthProvider } from './Context/Auth'

function App () {
  return (
    <div>
      <AuthProvider>
        <ProductosProvider>
          <Header />
          <Routes />
        </ProductosProvider>
      </AuthProvider>
    </div>
  )
}

export default App

import { useProductosContext } from '@/Context/ProductosContext'
import ProductoCard from '@/Components/ProductoCard'
import '@/Scss/components/vistaTodosProductos/_vistaTodosProductos.scss'
import Loader from '@/Components/Loader'

const VistaTodosProductos = () => {
  const context = useProductosContext()
  return (
    <div className='productos'>
      <h2 className='productos__titulo'>Nuestros Productos</h2>
      <div className='productos__grid'>
        {
          context.loading
            ? <div> <Loader /> </div>
            : context.resultados.map(producto => (
              <div
                className='productos__contenedor'
                key={producto._id}
              >
                <ProductoCard
                  producto={producto}
                />
              </div>
            ))
        }
      </div>
    </div>
  )
}

export default VistaTodosProductos

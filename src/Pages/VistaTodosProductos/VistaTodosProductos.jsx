import { useProductosContext } from '@/Context/ProductosContext'
import ProductoCard from '@/Components/ProductoCard'
import '@/Scss/components/vistaTodosProductos/_vistaTodosProductos.scss'

const VistaTodosProductos = () => {
  const context = useProductosContext()
  return (
    <div className='productos'>
      <h2 className='productos__titulo'>Nuestros Productos</h2>
      <div className='productos__grid'>
        {
          context.resultados.map(producto => (
            <div
              className='productos__contenedor'
              key={producto._id}
              // onClick={() => { context.setSelectedProducto(producto) }}
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

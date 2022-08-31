import { useEffect, useState, createContext, useContext } from 'react'
import { ProductosApi } from '@/Api/productosApi'

const ProductosContext = createContext()

function ProductosProvider (props) {
  const [productos, setProductos] = useState([])
  const [selectedProducto, setSelectedProducto] = useState({})
  const [loading, setLoading] = useState(true)
  const [busqueda, setBusqueda] = useState('')

  const getProductosData = async () => {
    try {
      setLoading(true)
      const res = await ProductosApi.get('/api/v1/item')
      // puse if
      if (res.status === 200) {
        setProductos(res.data)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    setTimeout(() => {
      getProductosData(ProductosApi)
      setLoading(false)
    }, 2000)
  }, [])

  let resultados = []
  if (!busqueda) {
    resultados = productos
  } else {
    resultados = productos.filter((dato) => dato.product_name.toLowerCase().includes(busqueda.toLocaleLowerCase())
    )
  }

  const value = {
    loading,
    setLoading,
    productos,
    setProductos,
    busqueda,
    setBusqueda,
    resultados,
    selectedProducto,
    setSelectedProducto
  }
  return (
    <ProductosContext.Provider
      value={value} {...props}
    />
  )
}

const useProductosContext = () => {
  const context = useContext(ProductosContext)
  return context
}
export {
  ProductosProvider,
  useProductosContext
}

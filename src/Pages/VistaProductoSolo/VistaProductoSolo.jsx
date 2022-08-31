import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ProductosApi } from '@/Api/productosApi'
import ProductoSinImagen from '@/assets/producto-sin-imagen.png'
import { FaShoppingCart } from 'react-icons/fa'
import '@/Scss/components/vistaProductoSolo/_vistaProductoSolo.scss'

const VistaProductoSolo = () => {
  const [productoId, setProductoId] = useState([])
  const { id } = useParams()

  useEffect(() => {
    const obtenerDatos = async () => {
      try {
        const res = await ProductosApi.get(`/api/v1/item/${id}`)
        setProductoId(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    obtenerDatos()
  }, [id])

  return (
    <div className='productoId'>
      <div className='productoId__contenedor'>
        {
        productoId.image
          ? <img src={productoId.image} onError={(e) => { e.target.onerror = null; e.target.src = ProductoSinImagen }} className='productoId__img' alt={productoId.product_name} />
          : <img src={ProductoSinImagen} className='productoId__img' alt={productoId.product_name} /> &&
            productoId.images
            ? <img src={productoId.images} className='productoId__img' alt={productoId.product_name} />
            : <img src={ProductoSinImagen} className='productoId__img' alt={productoId.product_name} />
      }
      </div>
      <div className='productoId__contenido'>
        <h3 className='productoId__nombre'>{productoId.product_name}</h3>
        <p className='productoId__descripcion'>{productoId.description}</p>
        <p className='productoId__precio'>${productoId.price}.00</p>
        <div className='productoId__botones'>
          <span className='productoId__carrito'><FaShoppingCart /></span>
          <button className='productoId__boton'>Comprar</button>
        </div>
      </div>

    </div>
  )
}

export default VistaProductoSolo

import React from 'react'
import ProductoSinImagen from '../../assets/producto-sin-imagen.png'
import { Link } from 'react-router-dom'
import '@/Scss/components/productoCard/_productoCard.scss'

const ProductoCard = ({ producto }) => {
  return (

    <>
      <div className='producto'>
        {
          /* revisar logica */
          producto.image
            ? <img src={producto.image} onError={(e) => { e.target.onerror = null; e.target.src = ProductoSinImagen }} className='producto__img' alt={producto.product_name} />
            : <img src={ProductoSinImagen} className='producto__img' alt={producto.product_name} /> &&
              producto.images
              ? <img src={producto.images} className='producto__img' alt={producto.product_name} />
              : <img src={ProductoSinImagen} className='producto__img' alt={producto.product_name} />
        }

        <div className='producto__contenido'>
          <h3 className='producto__nombre'>{producto.product_name}</h3>
        </div>
        <div className='producto__precios'>
          <h3 className='producto__precio'> $ {producto.price}.00</h3>
          <Link to={`/productos/${producto._id}`} style={{ textDecoration: 'none' }}>
            <button className='producto__boton'>Ver el producto </button>
          </Link>
        </div>
      </div>
    </>

  )
}

export default ProductoCard

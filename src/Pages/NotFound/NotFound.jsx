import React from 'react'
import { useLocation, Link } from 'react-router-dom'
import Error from '../../assets/error.png'
import '@/Scss/components/notfound/_notfound.scss'

const NotFound = () => {
  const location = useLocation()
  return (
    <div className='error'>
      <div className='error__conImg'>
        <img src={Error} className='error__img' alt='error' />
      </div>
      <div className='error__contenedor'>
        <p className='error__texto'> No encontre {location.pathname}</p>
        <Link to='/'>
          <button className='error__boton'>Regresar a Home </button>
        </Link>
      </div>
    </div>
  )
}

export default NotFound

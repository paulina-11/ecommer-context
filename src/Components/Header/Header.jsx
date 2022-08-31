import { useProductosContext } from '@/Context/ProductosContext'
import { Link } from 'react-router-dom'
import Logo from '../../assets/LOGO.png'
import { FaShoppingCart } from 'react-icons/fa'
import '@/Scss/components/header/_header.scss'

const Header = () => {
  const context = useProductosContext()

  const handleChange = (e) => {
    context.setBusqueda(e.target.value)
  }

  return (
    <header className='header header__inicio'>
      <div className='header__contenido contenedor'>
        <div className='header__barra'>
          <div className='header__logo'>
            <Link
              to='/'
              style={{ textDecoration: 'none' }}
            >
              {/* <span className='header__logo'><FaQq /></span> */}
              <div className='header__contenedorLogo'>
                <img src={Logo} className='header__logo' alt='logo' />
              </div>
            </Link>
          </div>
          <div className='header__principal'>
            <div className='header__items'>
              <Link
                to='/'
                style={{ textDecoration: 'none' }}
                className='header__liga'
              >Home
              </Link>
              <Link
                to='/login'
                style={{ textDecoration: 'none' }}
                className='header__liga'
              >Login
              </Link>
              <Link
                to='/register'
                style={{ textDecoration: 'none' }}
                className='header__liga'
              >Register
              </Link>
              <input
                className='header__input'
                type='text'
                placeholder='Busque su producto'
                value={context.busqueda}
                onChange={handleChange}
              />
              <span className='header__carrito'><FaShoppingCart /></span>
            </div>
          </div>
        </div>
        <div className='header__texto'>
          <h2>Cool Store, Tú nueva tienda favorita</h2>
        </div>
      </div>
    </header>
  )
}

export default Header

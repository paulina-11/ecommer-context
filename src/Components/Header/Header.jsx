import { useContext } from 'react'
import { useProductosContext } from '@/Context/ProductosContext'
import { Link } from 'react-router-dom'
import Logo from '../../assets/LOGO.png'
import { FaShoppingCart } from 'react-icons/fa'
import { AuthContext } from '@/Context/Auth.jsx'
import '@/Scss/components/header/_header.scss'

const Header = () => {
  const { isAuth, logout } = useContext(AuthContext)
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
              <div className='header__contenedorLogo'>
                <img src={Logo} className='header__logo' alt='logo' />
              </div>
            </Link>
          </div>
          <div className='header__principal'>
            <ul className='header__items'>
              <li>
                <Link
                  to='/'
                  className='header__liga'
                  style={{ textDecoration: 'none' }}
                >Home
                </Link>

              </li>
              {isAuth
                ? (
                  <li className='header__list-item'>
                    <Link
                      to='/productos'
                      className='header__liga'
                    >
                      Productos
                    </Link>
                  </li>
                  )
                : (
                  <></>
                  )}
              {isAuth
                ? (
                  <input
                    className='header__input'
                    type='text'
                    placeholder='Busque su producto'
                    value={context.busqueda}
                    onChange={handleChange}
                  />
                  )
                : (
                  <></>
                  )}
              {isAuth
                ? (
                  <div className='header__liga'>
                    <span className='header__carrito header__liga'><FaShoppingCart /></span>
                  </div>
                  )
                : (
                  <></>
                  )}
              {isAuth
                ? (
                  <li className='header__list-item'>
                    <Link
                      to='/'
                      className='header__liga'
                      onClick={logout}
                    >
                      logout
                    </Link>
                  </li>
                  )
                : (
                  <></>
                  )}

              {!isAuth
                ? (
                  <>
                    <li>
                      <Link to='/login' className='header__liga'>
                        Login
                      </Link>
                    </li>
                    <li>
                      <Link to='/register' className='header__liga'>
                        Registro
                      </Link>
                    </li>
                  </>
                  )
                : (
                  <></>
                  )}
            </ul>
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

import { useContext } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import Home from '@/Pages/Home'
import NotFound from '@/Pages/NotFound'
import Login from '@/Pages/Login'
import Register from '@/Pages/Register'
import VistaProductoSolo from '@/Pages/VistaProductoSolo'
import VistaTodosProductos from '@/Pages/VistaTodosProductos'
import SharedLayout from '@/Pages/SharedLayout'
import { AuthContext } from '@/Context/Auth.jsx'

function MainRoutes () {
  const { isAuth } = useContext(AuthContext)
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='register' element={<Register />} />
      <Route path='login' element={<Login />} />
      <Route path='productos' element={<SharedLayout />}>
        <Route index element={<VistaTodosProductos />} />
        <Route path=':id' element={<VistaProductoSolo />} />
      </Route>
      <Route
        path='productos'
        element={isAuth ? <VistaTodosProductos /> : <Navigate to='/' replace />}
      />
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

export default MainRoutes

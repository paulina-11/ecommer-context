import React from 'react'
import '@/Scss/components/dashboard/_dashboard.scss'
import Producto1 from '../../assets/galeria/producto-1.jpg'
import Producto2 from '../../assets/galeria/producto-2.jpg'
import Producto3 from '../../assets/galeria/producto-3.jpg'
import Producto4 from '../../assets/galeria/producto-4.jpg'
import Producto5 from '../../assets/galeria/producto-5.jpg'
import Producto6 from '../../assets/galeria/producto-6.jpg'
import Producto7 from '../../assets/galeria/producto-7.jpg'
import { Link } from 'react-router-dom'

const Dashboard = () => {
  return (
    <>
      <section className='contenido nosotros'>
        <div className='contenido__nosotros'>
          <h2 className='contenido__heading'>Sobre nosotros</h2>
          <p className='contenido__texto'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit in iure fuga quis ab incidunt quasi, possimus aut at, quos consectetur eos fugiat excepturi voluptate natus! Voluptas a doloribus consectetur?</p>
          <p className='contenido__texto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe fugit exercitationem sint error at quod sit perferendis ullam velit dolorum.</p>
        </div>
      </section>
      <section className='bloques'>
        <div className='bloques__grid'>
          <div className='bloque'>
            <div className='bloque__contenido'>
              <h2 className='bloque__heading'>4 años de experiencia</h2>
              <p className='bloque__texto'>Nos respanldas, siempre ofertando los mejores productos</p>
            </div>
          </div>
          <div className='bloque' />
          <div className='bloque'>
            <div className='bloque__contenido'>
              <h2 className='bloque__heading'>Productos</h2>
              <p className='bloque__texto'> Ofrecemos todo tipo de artículos de diseño y fabricación propia, como una amplia variedad de colecciones de fabricantes españoles e italianos de referencia. </p>
            </div>
          </div>
          <div className='bloque' />
        </div>
      </section>
      <section className='seccion__galeria'>
        <h2 className='galeria__titulo'>Galería de productos</h2>
        <div class='galeria'>
          <div class='galeria__imagen'>
            <img src={Producto1} className='galeria__img' alt='imagen galeria' />
          </div>

          <div class='galeria__imagen'>
            <img src={Producto2} className='galeria__img' alt='imagen galeria' />
          </div>

          <div class='galeria__imagen'>
            <img src={Producto3} className='galeria__img' alt='imagen galeria' />
          </div>

          <div class='galeria__imagen'>
            <img src={Producto4} className='galeria__img' alt='imagen galeria' />
          </div>

          <div class='galeria__imagen'>
            <img src={Producto5} className='galeria__img' alt='imagen galeria' />
          </div>

          <div class='galeria__imagen'>
            <img src={Producto6} className='galeria__img' alt='imagen galeria' />
          </div>

          <div class='galeria__imagen'>
            <img src={Producto7} className='galeria__img' alt='imagen galeria' />
          </div>
        </div>
      </section>
      <section className='sesion'>
        <p className='sesion__texto'>Si quieres ver más productos inicia sesión</p>
        <Link to='/login' style={{ textDecoration: 'none' }}>
          <button className='producto__boton'>Inicia sesión </button>
        </Link>
      </section>
    </>
  )
}

export default Dashboard

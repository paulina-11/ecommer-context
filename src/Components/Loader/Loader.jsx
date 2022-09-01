import React from 'react'
import ReactLoading from 'react-loading'
import '@/Scss/components/loader/_loader.scss'

const Loader = () => {
  const Example = ({ type, color }) => (
    <ReactLoading type='cubes' color='#313c4e' height='10rem' width='10rem' />
  )
  return (
    <div className='loader'>
      <Example className='loader__cuadros' />
    </div>
  )
}

export default Loader

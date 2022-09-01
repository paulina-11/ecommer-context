import { useContext, useState } from 'react'
import { LoginUser } from '@/services/UserServices.js'
import { AuthContext } from '@/Context/Auth.jsx'
import { useNavigate } from 'react-router-dom'
import Error from '@/Components/Error/Error'
import useForm from '@/hooks/useForm'
import '@/Scss/components/register/_register.scss'

function Login () {
  const [error, setError] = useState(false)
  const { loginUser } = useContext(AuthContext)
  const navigate = useNavigate()
  // Funcion que envia los datos
  const sendData = async (data) => {
    try {
      const result = await LoginUser(data)

      if (result.status === 200) {
        loginUser(result.data.token)
        navigate('/productos')
      }
    } catch (error) {
      setError(true)
    }
  }

  const { input, handleInputChange, handleSubmit } = useForm(sendData, {
    email: '',
    password: ''
  })

  return (
    <>
      {error && <Error>Todos los campos deben ser llenados</Error>}

      <form className='formulario'>
        <fieldset>
          <legend>Iniciar Sesión</legend>
          <div className='formulario__inputs'>
            <label htmlFor='exampleFormControlInput1' className='formulario__label'>
              Correo electronico
            </label>
            <input
              type='email'
              className='formulario__control'
              id='exampleFormControlInput1'
              placeholder='name@example.com'
              name='email'
              onChange={handleInputChange}
              value={input.email}
            />
          </div>
          <div className='formulario__inputs'>
            <label htmlFor='inputPassword' className='formulario__label'>
              Contraseña
            </label>
            <input
              type='password'
              className='formulario__control'
              id='inputPassword'
              name='password'
              onChange={handleInputChange}
              value={input.password}
            />
          </div>
        </fieldset>
        {/* boton */}
        <div>
          <div>
            <button type='button' className='formulario__boton' onClick={handleSubmit}>
              Login
            </button>
          </div>
        </div>
      </form>
    </>
  )
}

export default Login

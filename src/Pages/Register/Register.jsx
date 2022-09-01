import useForm from '@/hooks/useForm'
import { RegisterUser } from '@/services/UserServices.js'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Error from '@/Components/Error/Error'
import '@/Scss/components/register/_register.scss'

function Register () {
  const navigate = useNavigate()
  const [error, setError] = useState(false)

  const sendData = async (data) => {
    try {
      const result = await RegisterUser(data)

      if (result.status === 200) {
        navigate('/login')
      }
    } catch (error) {
      setError(true)
    }
  }

  const { input, handleInputChange, handleSubmit } = useForm(sendData, {
    first_name: '',
    last_name: '',
    birth_date: '',
    gender: 'Select a gender',
    email: '',
    password: ''

  })

  return (
    <>
      {error && <Error>Todos los campos deben ser llenados</Error>}
      <form
        className='formulario'
      >
        <fieldset>
          <legend>Ingresa tus datos</legend>
          <div className='formulario__inputs'>
            <label htmlFor='name' className='formulario__label'>
              Nombre
            </label>
            <input
              type='text'
              name='first_name'
              onChange={handleInputChange}
              value={input.first_name}
              className='formulario__control'
              id='name'
              placeholder='John'
            />
          </div>
          <div className='formulario__inputs'>
            <label htmlFor='last-name' className='formulario__label'>
              Apellido
            </label>
            <input
              type='text'
              name='last_name'
              onChange={handleInputChange}
              value={input.last_name}
              className='formulario__control'
              id='last-name'
              placeholder='Doe'
            />
          </div>
          <div className='formulario__inputs'>
            <label htmlFor='birth' className='formulario__label'>
              Fecha de nacimiento
            </label>
            <input
              type='date'
              className='formulario__control'
              id='birth'
              name='birth_date'
              onChange={handleInputChange}
              value={input.birth_date}
            />
          </div>
          <div className='formulario__inputs'>
            <label htmlFor='last-name' className='formulario__label'>
              Genero
            </label>
            <select
              className='formulario__control'
              name='gender'
              onChange={handleInputChange}
              value={input.gender}
            >
              <option value='Select a gender' disabled>
                --  Seleccciona --
              </option>
              <option value='M'>M</option>
              <option value='F'>F</option>
            </select>
          </div>
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
              Enviar
            </button>
          </div>
        </div>
      </form>
    </>
  )
}

export default Register

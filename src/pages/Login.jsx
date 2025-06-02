import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import GoogleLoginButton from '../components/GoogleLoginButton'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email && password) {
      localStorage.setItem('auth', 'true')
      navigate('/')
    }
  }

  const handleGoogleSuccess = (token) => {
    console.log('Google token:', token)
    localStorage.setItem('auth', 'true')
    navigate('/')
  }

  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-100'>
      <form onSubmit={handleSubmit} className='bg-white p-6 rounded shadow-md w-full max-w-md'>
        <h2 className='text-xl font-semibold mb-4 text-center'>Iniciar sesión</h2>
        <input
          type='email'
          placeholder='Correo electrónico'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className='w-full mb-3 p-2 border rounded'
          required
        />
        <input
          type='password'
          placeholder='Contraseña'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className='w-full mb-3 p-2 border rounded'
          required
        />
        <button type='submit' className='w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700'>
          Entrar
        </button>
        <div className='mt-4 border-t pt-4'>
          <GoogleLoginButton onSuccess={handleGoogleSuccess} />
        </div>
      </form>
    </div>
  )
}

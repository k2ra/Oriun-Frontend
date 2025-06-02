import { GoogleLogin } from '@react-oauth/google'

export default function GoogleLoginButton({ onSuccess }) {
  return (
    <div className='mt-4 text-center'>
      <GoogleLogin
        onSuccess={credentialResponse => {
          const token = credentialResponse.credential
          localStorage.setItem('auth', 'true')
          onSuccess(token)
        }}
        onError={() => {
          alert('Error al iniciar sesión con Google')
        }}
      />
    </div>
  )
}

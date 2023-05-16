import { useState, useEffect } from 'react'
import { useNavigate, useMatch } from 'react-router-dom'

import { Login, Register } from '@/components'

const Auth = () => {
  const navigate = useNavigate()
  const [authState, setAuthState] = useState('login')
  const isLogin = useMatch('/login')
  useEffect(() => {
    if (isLogin) {
      setAuthState('login')
    } else {
      setAuthState('register')
    }
  }, [isLogin])

  return <>{authState === 'login' ? <Login /> : <Register />}</>
}

export default Auth

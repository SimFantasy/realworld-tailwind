import { proxy, useSnapshot } from 'valtio'
import { derive } from 'valtio/utils'
import { isEmpty } from 'lodash-es'

const getAuthUser = () => {
  const jwt = localStorage.getItem('rw_jwt')
  if (!jwt) return {}

  return JSON.parse(jwt)
}

const state = proxy({
  authUser: getAuthUser()
})

const derived = derive({
  isAuth: get => !isEmpty(get(state).authUser)
})

const actions = {
  login: user => {
    state.authUser = user
    localStorage.setItem('rw_jwt', JSON.stringify(user))
  },
  logout: () => {
    state.authUser = null
    localStorage.removeItem('rw_jwt')
  },
  checkAuth: () => {
    const authUser = state.authUser
    if (!authUser || authUser === '') {
      actions.logout()
    }
  },
  setAuthUser: user => {
    state.authUser = user
  }
}

const useAuth = () => {
  const snap = useSnapshot(state)

  return {
    ...snap,
    ...actions,
    ...derived
  }
}

export default useAuth

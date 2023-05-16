import axios from 'axios'
import { SERVER, TIMEOUT } from '@/constants/config'

const createInstence = () => {
  const instance = axios.create({
    baseURL: SERVER,
    timeout: TIMEOUT
  })

  instance.interceptors.request.use(handleRequest)

  instance.interceptors.response.use(handleResponse, handleError)

  return instance
}

const handleRequest = config => {
  const jwt = localStorage.getItem('rw_jwt')
  if (jwt) {
    const token = JSON.parse(jwt).user.token
    config.headers.Authorization = `Token ${token}`
  }
  return config
}

const handleResponse = response => {
  if (response && response.data) {
    return response.data
  }
  return response
}

const handleError = error => {
  const { response } = error
  return Promise.reject(response ? response.data.errors : error)
}

const fetcher = createInstence()

export default fetcher

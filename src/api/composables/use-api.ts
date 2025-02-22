import HttpService from '../http/http-service'

import users from '../services/users'
import auth from '../services/auth'

export const http = new HttpService()

const api = {
  auth: auth(http),
  users: users(http)
}

const useApi = () => api

export default useApi

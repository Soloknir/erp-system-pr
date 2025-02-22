import type HttpService from '../http/http-service'

const auth = (http: HttpService) => {
  return {
    login: async (options: object) =>
      await http.post('/auth/login', options),
  }
}

export default auth

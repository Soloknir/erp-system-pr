import type HttpService from '../http/http-service'

const users = (http: HttpService) => {
  return {
    getUserNames: async (options?: object) =>
      await http.get('/users/names', options),
    getUserTabels: async (options?: object) =>
      await http.get('/users/tabels', options),
  }
}

export default users

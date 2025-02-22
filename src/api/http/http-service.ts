import { API_URL } from '@/config/api'
import { useFetch } from '@vueuse/core'

enum HTTP_METHODS {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
  PATCH = 'PATCH'
}

export default class HttpService {
  get(url: string, options: object = {}) {
    return this.request(url, HTTP_METHODS.GET, options)
  }

  post(url: string, data: object, options: object = {}) {
    return this.request(url, HTTP_METHODS.POST, options).post(data)
  }

  put(url: string, data: object, options: object = {}) {
    return this.request(url, HTTP_METHODS.PUT, options).put(data)
  }

  delete(url: string, options: object = {}) {
    return this.request(url, HTTP_METHODS.DELETE, options)
  }

  private request(
    url: string,
    method: HTTP_METHODS,
    options: object = {},
  ) {

    return useFetch(API_URL + url, {
      method,
      ...options
    })
  }
}

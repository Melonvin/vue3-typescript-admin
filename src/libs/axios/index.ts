import axios from 'axios'
import type { AxiosInstance, AxiosRequestConfig } from 'axios'
import type { ConfigWithInterceptors, Interceptors } from './interfaces'

class Service {
  private instance: AxiosInstance
  private interceptors?: Interceptors

  constructor(config: ConfigWithInterceptors) {
    this.instance = axios.create(config)
    this.interceptors = config?.interceptors
    this.addRequestInterceptors()
    this.addResponseInterceptors()
  }

  private addRequestInterceptors() {
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor ?? (value => value),
      this.interceptors?.requestErrorCallback ?? (err => Promise.reject(err))
    )
  }

  private addResponseInterceptors() {
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor ?? (value => value),
      this.interceptors?.responseErrorCallback ?? (err => Promise.reject(err))
    )
  }

  request(config: AxiosRequestConfig) {
    return this.instance.request(config)
  }
}

export default Service

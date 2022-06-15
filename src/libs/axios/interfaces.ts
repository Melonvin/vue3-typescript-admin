import type { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface Interceptors {
  requestInterceptor?: (request: AxiosRequestConfig) => AxiosRequestConfig
  requestErrorCallback?: (err: unknown) => unknown

  responseInterceptor?: (response: AxiosResponse) => AxiosResponse
  responseErrorCallback?: (err: unknown) => unknown
}

export interface ConfigWithInterceptors extends AxiosRequestConfig {
  interceptors?: Interceptors
}

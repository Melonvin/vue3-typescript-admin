import type { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface Interceptors {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestErrorCallback?: (err: any) => any

  responseInterceptor?: (config: AxiosResponse) => AxiosResponse
  responseErrorCallback?: (err: any) => any
}

export interface ConfigWithInterceptors extends AxiosRequestConfig {
  interceptors?: Interceptors
}

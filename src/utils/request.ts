import { AxiosRequestConfig, Method } from 'axios'
import Service from '../libs/axios'

interface ServiceRequestConfig<T = any> extends AxiosRequestConfig {
  url: string
  method?: Method
  params?: T
}

const service = new Service({
  timeout: 5000,
  interceptors: {
    // add interceptors here to do something
    // before request or after response
  }
})

const request = (config: ServiceRequestConfig) => {
  const { method = 'get' } = config
  if (method.toLowerCase() === 'post') {
    config.data = config.params
  }
  return service.request(config)
}

export default request

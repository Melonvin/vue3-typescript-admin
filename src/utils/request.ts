import { AxiosRequestConfig, Method } from 'axios'
import Service from '../libs/axios'

interface ServiceRequestConfig<T = unknown> extends AxiosRequestConfig {
  url: string
  method?: Method
  params?: T
}

const service = new Service({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 5000,
  interceptors: {
    // add interceptors here to do something
    // before request or after response
  }
})

async function request<T>(
  config: ServiceRequestConfig
): Promise<T | undefined> {
  const { method = 'get' } = config
  if (method.toLowerCase() === 'post') {
    config.data = config.params
  }
  try {
    const res = await service.request(config)
    if (res.status === 200) {
      return res.data as T
    }
  } catch (error) {
    console.log(error)
  }
  return void 0
}

export default request

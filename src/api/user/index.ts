/**
 * @description user 相关api
 * @author lxj
 * @since 2022/06/13
 */
import request from '@/utils/request'
import { LoginData, LoginResponse } from './models/login'

export function login(data: LoginData) {
  return request<LoginResponse>({
    url: '/api/test',
    method: 'post',
    data
  })
}

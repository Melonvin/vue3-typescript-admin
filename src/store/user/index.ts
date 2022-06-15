/**
 * @description user store
 * @author lxj
 * @since 2022/06/14
 */
import { login } from '@/api/user'
import { LoginData } from '@/api/user/models/login'
import { defineStore } from 'pinia'
import { actions } from './actions'
import { state, UserState } from './state'

export const useUserStore = defineStore('user', {
  state: (): UserState => state,
  actions: {
    // login: async function (data: LoginData): Promise<void> {
    //   const res = await login(data)
    //   console.log(res)
    //   this
    // },
    // create() {
    //   console.log(1)
    // }
  }
})

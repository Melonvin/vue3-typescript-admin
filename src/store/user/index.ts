/* eslint-disable @typescript-eslint/no-extra-semi */
/**
 * @description user store
 * @author lxj
 * @since 2022/06/14
 */
import { login } from '@/api/user'
import { LoginData } from '@/api/user/models/login'
import { defineStore } from 'pinia'
import { UserState } from './types'

export enum UserAction {
  LOGIN = 'login'
}

export const useUserStore = defineStore('users', {
  state: (): UserState => ({
    token: '',
    username: '',
    avatar: ''
  }),
  actions: {
    [UserAction.LOGIN]: async function (data: LoginData): Promise<void> {
      const res = await login(data)
      if (res) {
        ;[this.username, this.avatar, this.token] = [
          res.username,
          res.avatar,
          res.token
        ]
      }
    }
  }
})

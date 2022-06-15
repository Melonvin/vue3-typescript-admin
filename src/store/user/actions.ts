/**
 * @description user actions
 * @author lxj
 * @since 2022/06/15
 */

import { login } from '@/api/user'
import { LoginData } from '@/api/user/models/login'

export enum UserActionType {
  LOGIN = 'login'
}

export interface UserActions {
  [UserActionType.LOGIN]: (data: LoginData) => Promise<void>
}

export const actions: UserActions = {
  login: async function (data: LoginData): Promise<void> {
    const res = await login(data)
    console.log(res)
  }
}

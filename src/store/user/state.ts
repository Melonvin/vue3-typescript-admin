/**
 * @description user state
 * @author lxj
 * @since 2022/06/15
 */

export interface UserState {
  token: string
  username: string
  avatar: string
}

export const state: UserState = {
  token: '',
  username: '',
  avatar: ''
}

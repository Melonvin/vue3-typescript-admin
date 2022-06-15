export class LoginData {
  username: string
  password: string

  constructor(username: string, password: string) {
    this.username = username.trim()
    this.password = password.trim()
  }
}

export interface LoginResponse {
  username: string
  avatar: string
}

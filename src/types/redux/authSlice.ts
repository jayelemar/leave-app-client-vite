export interface User {
  name: string
  email: string
  phone: number
  bio: string
}

export interface AuthState {
  isLoggedIn: boolean
  user: null | User
  users: [] | User[]
  twoFactor: boolean
  message: string
}

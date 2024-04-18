import axios from 'axios'
import { BACKEND_URL } from '@/utils/secrets'
import { UserData } from '@/types/auth/User'

export interface LoginWithCode {
  email: string
  loginCode: string
}

export const loginWithCode = async (data: LoginWithCode): Promise<UserData | undefined> => {
  try {
    const { email, loginCode } = data
    const response = await axios.post(`${BACKEND_URL}/api/users/login-with-code/${encodeURIComponent(email)}`, {
      loginCode,
    })
    return response.data
  } catch (error) {
    const message = axios.isAxiosError(error)
      ? error.response?.data?.message || error.message || 'An expected error occurred during registration.'
      : 'An unexpected error occurred'
    console.error('Server Response:', message)
  }
}

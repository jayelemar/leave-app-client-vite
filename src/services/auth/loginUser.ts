import axios from 'axios'
import { BACKEND_URL } from '@/utils/secrets'

export interface LoginUser {
  email: string
  password: string
}

export const loginUser = async (data: LoginUser) => {
  try {
    const response = await axios.post(`${BACKEND_URL}/api/users/login`, data)
    return response.data
  } catch (error) {
    const message = axios.isAxiosError(error)
      ? error.response?.data?.message || error.message || 'An expected error occurred during registration.'
      : 'An unexpected error occurred'
    console.error('Server Response:', message)
  }
}

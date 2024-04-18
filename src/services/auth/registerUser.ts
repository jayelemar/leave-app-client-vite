import axios from 'axios'
import { BACKEND_URL } from '@/utils/secrets'

export interface RegisterUser {
  name: string
  email: string
  password: string
}

export const registerUser = async (data: RegisterUser) => {
  try {
    const response = await axios.post(`${BACKEND_URL}/api/users/register`, data)
    return response.data
  } catch (error) {
    const message = axios.isAxiosError(error)
      ? error.response?.data?.message || error.message || 'An expected error occurred during registration.'
      : 'An unexpected error occurred'
    console.error('Server Response:', message)
  }
}
